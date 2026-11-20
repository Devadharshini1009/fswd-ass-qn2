import { useCallback, useEffect, useState } from 'react';
import StudentForm from '../components/StudentForm.jsx';
import { createStudent, deleteStudent, fetchStudents, updateStudent } from '../api/studentApi.js';

export default function StudentRecords() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const loadStudents = useCallback(async () => {
    try {
      setError('');
      const data = await fetchStudents();
      setStudents(data);
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to load records. Check whether the backend is running on port 5000.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadStudents(); }, [loadStudents]);

  const handleSubmit = async (studentData) => {
    try {
      setSubmitting(true);
      setError('');
      if (editingStudent) {
        await updateStudent(editingStudent.id, studentData);
        setMessage('Student record updated successfully.');
        setEditingStudent(null);
      } else {
        await createStudent(studentData);
        setMessage('Student record added successfully.');
      }
      await loadStudents();
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to save the student record.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this student record?')) return;
    try {
      setError('');
      await deleteStudent(id);
      setMessage('Student record deleted successfully.');
      if (editingStudent?.id === id) setEditingStudent(null);
      await loadStudents();
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to delete the student record.');
    }
  };

  return (
    <section>
      <div className="page-heading">
        <div><p className="eyebrow">STUDENT RECORDS</p><h1>Student Skill Records</h1></div>
        <button className="secondary-btn" onClick={loadStudents}>Refresh Records</button>
      </div>

      <section className="panel">
        <h2>{editingStudent ? 'Update Student Details' : 'Add Student Details'}</h2>
        <StudentForm
          key={editingStudent?.id ?? 'new'}
          initialData={editingStudent}
          onSubmit={handleSubmit}
          onCancel={() => setEditingStudent(null)}
          submitting={submitting}
        />
      </section>

      {message && <p className="notice success" role="status">{message}</p>}
      {error && <p className="notice error" role="alert">{error}</p>}

      <section className="panel records-panel">
        <div className="records-title"><h2>All Student Records</h2><span>{students.length} record(s)</span></div>
        {loading ? <p className="empty-state">Loading student records...</p> : students.length === 0 ? (
          <p className="empty-state">No student records available. Add a student using the form above.</p>
        ) : (
          <div className="table-wrap">
            <table>
              <thead><tr><th>Name</th><th>Register No.</th><th>Department</th><th>Technical Skills</th><th>Aptitude</th><th>Communication</th><th>Readiness</th><th>Actions</th></tr></thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.name}</td><td>{student.registerNumber}</td><td>{student.department}</td>
                    <td>{student.technicalSkills}</td><td>{student.aptitudeScore}</td>
                    <td>{student.communicationSkills}</td><td><span className="status">{student.placementReadiness}</span></td>
                    <td className="actions"><button onClick={() => { setEditingStudent(student); setMessage(''); }}>Edit</button><button className="delete-btn" onClick={() => handleDelete(student.id)}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </section>
  );
}

import { useEffect, useState } from 'react';

const emptyForm = {
  name: '',
  registerNumber: '',
  department: '',
  technicalSkills: '',
  aptitudeScore: '',
  communicationSkills: 'Average',
  placementReadiness: 'In Progress',
};

export default function StudentForm({ initialData, onSubmit, onCancel, submitting }) {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    setForm(initialData ? {
      name: initialData.name ?? '',
      registerNumber: initialData.registerNumber ?? '',
      department: initialData.department ?? '',
      technicalSkills: initialData.technicalSkills ?? '',
      aptitudeScore: initialData.aptitudeScore ?? '',
      communicationSkills: initialData.communicationSkills ?? 'Average',
      placementReadiness: initialData.placementReadiness ?? 'In Progress',
    } : emptyForm);
  }, [initialData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ ...form, aptitudeScore: Number(form.aptitudeScore) });
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>Student Name<input name="name" value={form.name} onChange={handleChange} required /></label>
        <label>Register Number<input name="registerNumber" value={form.registerNumber} onChange={handleChange} required /></label>
        <label>Department<input name="department" value={form.department} onChange={handleChange} required /></label>
        <label>Technical Skills<input name="technicalSkills" value={form.technicalSkills} onChange={handleChange} placeholder="Java, Python, SQL" required /></label>
        <label>Aptitude Score<input name="aptitudeScore" type="number" min="0" max="100" value={form.aptitudeScore} onChange={handleChange} required /></label>
        <label>Communication Skills
          <select name="communicationSkills" value={form.communicationSkills} onChange={handleChange}>
            <option>Excellent</option><option>Good</option><option>Average</option><option>Needs Improvement</option>
          </select>
        </label>
        <label>Placement Readiness
          <select name="placementReadiness" value={form.placementReadiness} onChange={handleChange}>
            <option>Ready</option><option>In Progress</option><option>Not Ready</option>
          </select>
        </label>
      </div>
      <div className="form-actions">
        <button className="primary-btn" disabled={submitting}>{submitting ? 'Saving...' : initialData ? 'Update Record' : 'Add Record'}</button>
        {initialData && <button type="button" className="secondary-btn" onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  );
}

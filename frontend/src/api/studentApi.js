import axios from 'axios';

const studentApi = axios.create({
  baseURL: 'http://localhost:5001/api/students',
  headers: { 'Content-Type': 'application/json' },
});

// Axios GET: retrieve all student skill records.
export const fetchStudents = async () => {
  const response = await studentApi.get('/');
  return response.data;
};

// Axios POST: create a student skill record.
export const createStudent = async (studentData) => {
  const response = await studentApi.post('/', studentData);
  return response.data;
};

// Axios PUT: update an existing student skill record.
export const updateStudent = async (id, studentData) => {
  const response = await studentApi.put(`/${id}`, studentData);
  return response.data;
};

// Axios DELETE: remove a student skill record.
export const deleteStudent = async (id) => {
  const response = await studentApi.delete(`/${id}`);
  return response.data;
};

let students = [];
let nextId = 1;

export const getAllStudents = () => students;

export const addStudent = (studentData) => {
  const student = { id: nextId++, ...studentData };
  students.push(student);
  return student;
};

export const updateStudent = (id, updatedData) => {
  const index = students.findIndex((student) => student.id === Number(id));
  if (index === -1) return null;
  students[index] = { ...students[index], ...updatedData, id: Number(id) };
  return students[index];
};

export const deleteStudent = (id) => {
  const index = students.findIndex((student) => student.id === Number(id));
  if (index === -1) return false;
  students.splice(index, 1);
  return true;
};

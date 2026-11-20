import {
  getAllStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from '../data/studentStore.js';

const requiredFields = [
  'name',
  'registerNumber',
  'department',
  'technicalSkills',
  'aptitudeScore',
  'communicationSkills',
  'placementReadiness',
];

export const getStudents = (_req, res) => {
  res.status(200).json(getAllStudents());
};

export const createStudent = (req, res) => {
  const missing = requiredFields.filter((field) => req.body[field] === undefined || req.body[field] === '');
  if (missing.length) {
    return res.status(400).json({ message: `Missing required fields: ${missing.join(', ')}` });
  }
  const student = addStudent({
    name: String(req.body.name).trim(),
    registerNumber: String(req.body.registerNumber).trim(),
    department: String(req.body.department).trim(),
    technicalSkills: String(req.body.technicalSkills).trim(),
    aptitudeScore: Number(req.body.aptitudeScore),
    communicationSkills: String(req.body.communicationSkills),
    placementReadiness: String(req.body.placementReadiness),
  });
  return res.status(201).json({ message: 'Student skill record added successfully', student });
};

export const editStudent = (req, res) => {
  const student = updateStudent(req.params.id, req.body);
  if (!student) return res.status(404).json({ message: 'Student record not found' });
  return res.status(200).json({ message: 'Student skill record updated successfully', student });
};

export const removeStudent = (req, res) => {
  const deleted = deleteStudent(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Student record not found' });
  return res.status(200).json({ message: 'Student skill record deleted successfully' });
};

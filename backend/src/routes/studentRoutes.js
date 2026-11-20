import { Router } from 'express';
import {
  getStudents,
  createStudent,
  editStudent,
  removeStudent,
} from '../controllers/studentController.js';

const router = Router();
router.get('/', getStudents);
router.post('/', createStudent);
router.put('/:id', editStudent);
router.delete('/:id', removeStudent);

export default router;

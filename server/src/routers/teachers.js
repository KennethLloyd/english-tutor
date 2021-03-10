import express from 'express';
import authenticate from '../middleware/authenticate.js';
import uploadImage from '../middleware/upload-image.js';
import { teacherController } from '../controllers/index.js';
import { teacherValidator } from '../validators/index.js';

const router = new express.Router();

router.put(
  '/settings/teachers',
  authenticate,
  teacherValidator.updateTeacherPageSettings,
  teacherController.updateTeacherPageSettings,
);

router.get('/settings/teachers', teacherController.getTeacherPageSettings);

router.post(
  '/teachers',
  authenticate,
  uploadImage,
  teacherValidator.addTeacher,
  teacherController.addTeacher,
);

router.put(
  '/teachers/:id',
  authenticate,
  uploadImage,
  teacherValidator.editTeacher,
  teacherController.editTeacher,
);

router.get(
  '/teachers',
  teacherValidator.getTeachers,
  teacherController.getTeachers,
);

export default router;

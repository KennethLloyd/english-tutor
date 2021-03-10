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

export default router;

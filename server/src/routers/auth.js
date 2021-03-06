import express from 'express';
import { authController } from '../controllers/index.js';
import { authValidator } from '../validators/index.js';

const router = new express.Router();

router.post('/auth/login', authValidator.logIn, authController.logIn);
router.post(
  '/auth/hash-password',
  authValidator.hashPassword,
  authController.hashPassword,
);

export default router;

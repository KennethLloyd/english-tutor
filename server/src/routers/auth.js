import express from 'express';
import authenticate from '../middleware/authenticate.js';
import { authController } from '../controllers/index.js';
import { authValidator } from '../validators/index.js';

const router = new express.Router();

router.post('/auth/login', authValidator.logIn, authController.logIn);

export default router;

import express from 'express';
import authenticate from '../middleware/authenticate.js';
import uploadImage from '../middleware/upload-image.js';
import { mainController } from '../controllers/index.js';
import { mainValidator } from '../validators/index.js';

const router = new express.Router();

router.put(
  '/settings/navigation',
  authenticate,
  uploadImage,
  mainValidator.updateNavigationSettings,
  mainController.updateNavigationSettings,
);
router.put(
  '/settings/hero',
  authenticate,
  uploadImage,
  mainValidator.updateHeroSettings,
  mainController.updateHeroSettings,
);
router.get('/settings/navigation', mainController.getNavigationSettings);
router.get('/settings/hero', mainController.getHeroSettings);

router.get('/settings/all', mainController.getAllSettings);
router.get('/admin-config', mainController.getAdminConfig);

export default router;

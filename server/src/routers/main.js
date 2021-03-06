import express from 'express';
import authenticate from '../middleware/authenticate.js';
import { mainController } from '../controllers/index.js';
import { mainValidator } from '../validators/index.js';

const router = new express.Router();

router.put('/settings/navigation', authenticate, mainValidator.updateNavigationSettings, mainController.updateNavigation);
router.put('/settings/hero', authenticate, mainValidator.updateHeroSettings, mainController.updateHero);

export default router;

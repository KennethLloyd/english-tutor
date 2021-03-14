import express from 'express';
import authenticate from '../middleware/authenticate.js';
import { pricingController } from '../controllers/index.js';
import { pricingValidator } from '../validators/index.js';

const router = new express.Router();

router.put(
  '/settings/pricing',
  authenticate,
  pricingValidator.updatePricingPageSettings,
  pricingController.updatePricingPageSettings,
);

router.get('/settings/pricing', pricingController.getPricingPageSettings);

router.post(
  '/pricing',
  authenticate,
  pricingValidator.addPricing,
  pricingController.addPricing,
);

router.put(
  '/pricing/:id',
  authenticate,
  pricingValidator.editPricing,
  pricingController.editPricing,
);

router.get(
  '/pricing',
  pricingValidator.getPricing,
  pricingController.getPricing,
);

router.delete('/pricing/:id', authenticate, pricingController.deletePricing);

export default router;

import express from 'express';
import authenticate from '../middleware/authenticate.js';
import uploadImage from '../middleware/upload-image.js';
import { contactController } from '../controllers/index.js';
import { contactValidator } from '../validators/index.js';

const router = new express.Router();

router.put(
  '/settings/contacts',
  authenticate,
  contactValidator.updateContactPageSettings,
  contactController.updateContactPageSettings,
);

router.get('/settings/contacts', contactController.getContactPageSettings);

router.post(
  '/contacts',
  authenticate,
  uploadImage,
  contactValidator.addContact,
  contactController.addContact,
);

router.put(
  '/contacts/:id',
  authenticate,
  uploadImage,
  contactValidator.editContact,
  contactController.editContact,
);

router.get(
  '/contacts',
  contactValidator.getContacts,
  contactController.getContacts,
);

router.delete('/contacts/:id', authenticate, contactController.deleteContact);

export default router;

import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import config from 'config';
import { err } from '../helpers/utils.js';
import sequelize from '../db/sequelize.js';
import { NavigationSettings } from '../models/index.js';

/**
@api {put} /api/settings/navigation Update Navigation Settings
@apiVersion 1.0.0
@apiName UpdateNavigationSettings
@apiGroup Settings

@apiParam {File} [image] Logo to upload
@apiParam {String} [teachersLabel] Teachers label
@apiParam {String} [pricingLabel] Pricing label
@apiParam {String} [contactLabel] Contact label

@apiSuccess {String} token Auth token
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "message": "Successfully updated navigation settings",
    "settings": {
        "id": "36c66a0c-bb4e-430b-8f30-79e072f1662e",
        "teachersLabel": "Mga Guro",
        "pricingLabel": "Presyo",
        "contactLabel": "Kontak",
        "logoUrl": "https://res.cloudinary.com/kennethlloyd/image/upload/v1615041337/english-courses/1615041336174-lelouch-geass.jpg.jpg",
        "updatedAt": "2021-03-06T14:35:37.924Z",
        "createdAt": "2021-03-06T14:35:37.924Z"
    }
}
*/

const updateNavigationSettings = async (req, res) => {
  try {
    if (req.imageUrl) {
      req.body.logoUrl = req.imageUrl;
    }

    let settings = await NavigationSettings.findOne();

    if (settings) {
      settings.teachersLabel = req.body.teachersLabel;
      settings.pricingLabel = req.body.pricingLabel;
      settings.contactLabel = req.body.contactLabel;
      settings.logoUrl = req.body.logoUrl;
    }
    else {
      settings = new NavigationSettings(req.body);
    }

    await settings.save();

    const updatedSettings = await NavigationSettings.findOne();

    return res.send({
      message: 'Successfully updated navigation settings',
      settings: updatedSettings
    });
  } catch (e) {
    console.log(e);

    if (e.status) {
      return res.status(e.status).send({ error: e.message });
    }
    return res.status(500).send({ error: 'Internal Server Error' });
  }
};

const updateHeroSettings = async (req, res) => {
  try {
    const settings = await NavigationSettings.findOne();

    if (!settings) {
      const newSettings = new NavigationSettings(req.body);

      await newSettings.save();
    }

    settings.teachersLabel = req.body.teachersLabel;
    settings.pricingLabel = req.body.pricingLabel;
    settings.contactLabel = req.body.contactLabel;

    await settings.save();

    return res.send({ token });
  } catch (e) {
    console.log(e);

    if (e.status) {
      return res.status(e.status).send({ error: e.message });
    }
    return res.status(500).send({ error: 'Internal Server Error' });
  }
};

const mainController = {
  updateNavigationSettings,
  updateHeroSettings
};

export default mainController;

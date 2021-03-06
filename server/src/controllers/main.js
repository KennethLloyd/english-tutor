import { NavigationSettings, HeroSettings } from '../models/index.js';

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
      settings.logoUrl = req.body.logoUrl ? req.body.logoUrl : settings.logoUrl;
    } else {
      settings = new NavigationSettings(req.body);
    }

    await settings.save();

    const updatedSettings = await NavigationSettings.findOne();

    return res.send({
      message: 'Successfully updated navigation settings',
      settings: updatedSettings,
    });
  } catch (e) {
    console.log(e);

    if (e.status) {
      return res.status(e.status).send({ error: e.message });
    }
    return res.status(500).send({ error: 'Internal Server Error' });
  }
};

/**
@api {put} /api/settings/hero Update Hero Settings
@apiVersion 1.0.0
@apiName UpdateHeroSettings
@apiGroup Settings

@apiParam {File} [image] Background image to upload
@apiParam {Number} [backgroundOpacity] Background opacity
@apiParam {String} [titleText] Title text
@apiParam {String} [titleTextColor] Title text color
@apiParam {String} [subtitleText] Subtitle text
@apiParam {String} [subtitleTextColor] Subtitle text color
@apiParam {String} [actionButtonText] Action button text
@apiParam {String} [actionButtonTextColor] Action button text color
@apiParam {String} [actionButtonColor] Action button color

@apiSuccess {String} token Auth token
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "message": "Successfully updated hero settings",
    "settings": {
        "id": "a0139539-bb57-4b0f-9526-8f7b04626a36",
        "backgroundImageUrl": "https://res.cloudinary.com/kennethlloyd/image/upload/v1615042398/english-courses/1615042396604-idle.JPG.jpg",
        "backgroundOpacity": 79,
        "titleText": "Best of fourth generation",
        "titleTextColor": "#FFFFFF",
        "subtitleText": "HIgher and higher than my fire will grow",
        "subtitleTextColor": "#FFFFFF",
        "actionButtonText": "Subscribe now!",
        "actionButtonTextColor": "#FFFFFF",
        "actionButtonColor": "#751CBB",
        "createdAt": "2021-03-06T14:53:19.000Z",
        "updatedAt": "2021-03-06T14:56:10.000Z"
    }
}
*/

const updateHeroSettings = async (req, res) => {
  try {
    if (req.imageUrl) {
      req.body.backgroundImageUrl = req.imageUrl;
    }

    let settings = await HeroSettings.findOne();

    if (settings) {
      settings.backgroundOpacity = req.body.backgroundOpacity;
      settings.titleText = req.body.titleText;
      settings.titleTextColor = req.body.titleTextColor;
      settings.subtitleText = req.body.subtitleText;
      settings.subtitleTextColor = req.body.subtitleTextColor;
      settings.actionButtonText = req.body.actionButtonText;
      settings.actionButtonTextColor = req.body.actionButtonTextColor;
      settings.actionButtonColor = req.body.actionButtonColor;
      settings.backgroundImageUrl = req.body.backgroundImageUrl
        ? req.body.backgroundImageUrl
        : settings.backgroundImageUrl;
    } else {
      settings = new HeroSettings(req.body);
    }

    await settings.save();

    const updatedSettings = await HeroSettings.findOne();

    return res.send({
      message: 'Successfully updated hero settings',
      settings: updatedSettings,
    });
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
  updateHeroSettings,
};

export default mainController;

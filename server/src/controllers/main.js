import {
  NavigationSettings,
  HeroSettings,
  TeacherPageSettings,
  Teachers,
  PricingPageSettings,
  Pricings,
  PricingFeatures,
  ContactPageSettings,
  Contacts,
} from '../models/index.js';
import { loadConfig } from '../helpers/utils.js';

/**
@api {put} /api/settings/navigation Update Navigation Settings
@apiVersion 1.0.0
@apiName UpdateNavigationSettings
@apiGroup Settings

@apiParam {File} [image] Logo to upload
@apiParam {String} [teachersLabel] Teachers label
@apiParam {String} [pricingLabel] Pricing label
@apiParam {String} [contactLabel] Contact label

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

/**
@api {get} /api/settings/navigation Get Navigation Settings
@apiVersion 1.0.0
@apiName GetNavigationSettings
@apiGroup Settings

@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "message": "Successfully retrieved navigation settings",
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

const getNavigationSettings = async (req, res) => {
  try {
    let settings = await NavigationSettings.findOne();

    if (!settings) {
      settings = [];
    }

    return res.send({
      message: 'Successfully retrieved navigation settings',
      settings,
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
@api {get} /api/settings/hero Get Hero Settings
@apiVersion 1.0.0
@apiName GetHeroSettings
@apiGroup Settings

@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "message": "Successfully retrieved hero settings",
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

const getHeroSettings = async (req, res) => {
  try {
    let settings = await HeroSettings.findOne();

    if (!settings) {
      settings = [];
    }

    return res.send({
      message: 'Successfully retrieved hero settings',
      settings,
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
@api {get} /api/settings/all Get All Settings
@apiVersion 1.0.0
@apiName GetAllSettings
@apiGroup Settings

@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "message": "Successfully retrieved all settings",
    "navigationSettings": {
        "id": "36c66a0c-bb4e-430b-8f30-79e072f1662e",
        "logoUrl": "https://res.cloudinary.com/kennethlloyd/image/upload/v1615680404/english-courses/1615680402878-mWmTXSc.jpeg.jpg",
        "teachersLabel": "Mga Guros natin",
        "pricingLabel": "Presyossss",
        "contactLabel": "Kontak mo pleasessss",
        "createdAt": "2021-03-06T14:35:37.000Z",
        "updatedAt": "2021-03-14T08:15:00.000Z"
    },
    "heroSettings": {
        "id": "a0139539-bb57-4b0f-9526-8f7b04626a36",
        "backgroundImageUrl": "https://res.cloudinary.com/kennethlloyd/image/upload/v1615680261/english-courses/1615680259574-6X3KrqF.jpeg.jpg",
        "backgroundOpacity": 84,
        "titleText": "Prettiest main vocal ever",
        "titleTextColor": "#42523c",
        "subtitleText": "When my heart forgets your old distant tune",
        "subtitleTextColor": "#8bc98b",
        "actionButtonText": "Subscribe now!!",
        "actionButtonTextColor": "#db9d9d",
        "actionButtonColor": "#8e45ca",
        "createdAt": "2021-03-06T14:53:19.000Z",
        "updatedAt": "2021-03-14T00:04:21.000Z"
    },
    "teacherSettings": {
        "id": "5cb2551a-a383-465c-94b2-7d63013d49bc",
        "backgroundColor": "#d4bdbd",
        "titleLabel": "Mga Guro Natinsss",
        "titleLabelColor": "#423a3a",
        "createdAt": "2021-03-10T02:18:04.000Z",
        "updatedAt": "2021-03-14T08:08:32.000Z"
    },
    "teacherList": [
        {
            "id": "86fac2ac-4c70-4f07-be18-c0be6b2e5f1f",
            "order": 3,
            "firstName": "Soojin",
            "lastName": "Seo",
            "status": true,
            "photoUrl": "https://res.cloudinary.com/kennethlloyd/image/upload/v1615680428/english-courses/1615680426290-ajm8Xx2.jpeg.jpg",
            "createdAt": "2021-03-14T00:07:08.000Z",
            "updatedAt": "2021-03-14T08:08:34.000Z"
        }
    ],
    "pricingSettings": {
        "id": "e9eb4661-20e1-4a03-9eaa-9a84ace129e1",
        "backgroundColor": "#af9191",
        "titleLabel": "Ang Aming Presyo",
        "titleLabelColor": "#000000",
        "headerBackgroundColor": "#000000",
        "headerTextColor": "#d35555",
        "detailsBackgroundColor": "#6e6e6e",
        "detailsTextColor": "#ff7c7c",
        "createdAt": "2021-03-14T01:14:31.000Z",
        "updatedAt": "2021-03-14T08:15:22.000Z"
    },
    "pricingList": [
        {
            "id": "63480267-86ef-412b-a25d-52b21c973e6e",
            "order": 1,
            "header": "new newline",
            "price": "30",
            "status": true,
            "createdAt": "2021-03-14T05:10:32.000Z",
            "updatedAt": "2021-03-14T05:10:32.000Z",
            "features": [
                {
                    "id": "a299c373-df1f-426d-9d0f-1c9308137502",
                    "pricingId": "63480267-86ef-412b-a25d-52b21c973e6e",
                    "feature": "sino",
                    "order": 1,
                    "createdAt": "2021-03-14T05:10:32.000Z",
                    "updatedAt": "2021-03-14T05:10:32.000Z"
                },
                {
                    "id": "c015c5a2-6adb-4290-b4c1-cb019dd7f20e",
                    "pricingId": "63480267-86ef-412b-a25d-52b21c973e6e",
                    "feature": "nagsabi",
                    "order": 2,
                    "createdAt": "2021-03-14T05:10:32.000Z",
                    "updatedAt": "2021-03-14T05:10:32.000Z"
                }
            ]
        },
        {
            "id": "3b1838cf-4828-43cf-8541-ed53b689acc1",
            "order": 2,
            "header": "basic",
            "price": "10 dollars per hour",
            "status": true,
            "createdAt": "2021-03-14T03:33:38.000Z",
            "updatedAt": "2021-03-14T03:33:38.000Z",
            "features": [
                {
                    "id": "6932e483-20e0-4634-9cb7-2c7fd07a8d6a",
                    "pricingId": "3b1838cf-4828-43cf-8541-ed53b689acc1",
                    "feature": "everlasting support",
                    "order": 1,
                    "createdAt": "2021-03-14T03:33:38.000Z",
                    "updatedAt": "2021-03-14T03:33:38.000Z"
                },
                {
                    "id": "e89cf876-0c8e-490d-a8b0-36a94d1fc5e0",
                    "pricingId": "3b1838cf-4828-43cf-8541-ed53b689acc1",
                    "feature": "24/7 availability",
                    "order": 2,
                    "createdAt": "2021-03-14T03:33:38.000Z",
                    "updatedAt": "2021-03-14T03:33:38.000Z"
                }
            ]
        }
    ],
    "contactSettings": {
        "id": "3b8f499b-d131-4081-81af-5b0bba4ee019",
        "backgroundColor": "#F4F4F4",
        "titleLabel": "Ang Ating Mga Kontaks",
        "titleLabelColor": "#000000",
        "contactCardTitle": "Title ko eh",
        "contactCardTitleColor": "#000000",
        "contactCardBackgroundColor": "#c30f0f",
        "footerLabel": "paa natin",
        "footerBackgroundColor": "#000000",
        "footerTextColor": "#000000",
        "createdAt": "2021-03-14T06:24:10.000Z",
        "updatedAt": "2021-03-14T06:52:55.000Z"
    },
    "contactList": [
        {
            "id": "d6fea18f-8e17-4f49-ac9e-d933c7ac5bf3",
            "order": 1,
            "platformName": "Facebook",
            "details": "my.fb.username",
            "status": true,
            "iconUrl": "https://res.cloudinary.com/kennethlloyd/image/upload/v1615704087/english-courses/1615704086108-facebook.svg.svg",
            "createdAt": "2021-03-14T06:41:29.000Z",
            "updatedAt": "2021-03-14T06:41:37.000Z"
        },
        {
            "id": "0992062a-3859-40ad-b6c5-135e84c1c428",
            "order": 2,
            "platformName": "Twitter",
            "details": "therealmepo",
            "status": true,
            "iconUrl": "https://res.cloudinary.com/kennethlloyd/image/upload/v1615703159/english-courses/1615703157907-cg-feat.jpg.jpg",
            "createdAt": "2021-03-14T06:26:00.000Z",
            "updatedAt": "2021-03-14T06:33:35.000Z"
        },
        {
            "id": "cd346807-7689-4650-ae29-4dae5357911c",
            "order": 5,
            "platformName": "Phone",
            "details": "09897675543",
            "status": true,
            "iconUrl": "https://res.cloudinary.com/kennethlloyd/image/upload/v1615703300/english-courses/1615703299155-cg-feat.jpg.jpg",
            "createdAt": "2021-03-14T06:28:21.000Z",
            "updatedAt": "2021-03-14T06:49:03.000Z"
        }
    ]
}
*/

const getAllSettings = async (req, res) => {
  try {
    let navigationSettings = await NavigationSettings.findOne();
    let heroSettings = await HeroSettings.findOne();
    let teacherSettings = await TeacherPageSettings.findOne();
    let teacherList = await Teachers.findAll({
      where: {
        status: true,
      },
      order: ['order'],
    });
    teacherList = teacherList.map((teacher) => teacher.toJSON());

    let pricingSettings = await PricingPageSettings.findOne();
    let pricingList = await Pricings.findAll({
      where: {
        status: true,
      },
      order: ['order'],
    });
    pricingList = await Promise.all(
      pricingList.map(async (pricing) => {
        pricing = pricing.toJSON();

        const result = await PricingFeatures.findAll({
          where: {
            pricingId: pricing.id,
          },
          order: ['order'],
        });

        const features = result.map((item) => item.toJSON());

        pricing = { ...pricing, features };

        return pricing;
      }),
    );

    let contactSettings = await ContactPageSettings.findOne();
    let contactList = await Contacts.findAll({
      where: {
        status: true,
      },
      order: ['order'],
    });
    contactList = contactList.map((contact) => contact.toJSON());

    if (!navigationSettings) {
      navigationSettings = [];
    }

    if (!heroSettings) {
      heroSettings = [];
    }

    if (!teacherSettings) {
      teacherSettings = [];
    }

    if (!teacherList) {
      teacherList = [];
    }

    if (!pricingSettings) {
      pricingSettings = [];
    }

    if (!pricingList) {
      pricingList = [];
    }

    if (!contactSettings) {
      contactSettings = [];
    }

    if (!contactList) {
      contactList = [];
    }

    return res.send({
      message: 'Successfully retrieved all settings',
      navigationSettings,
      heroSettings,
      teacherSettings,
      teacherList,
      pricingSettings,
      pricingList,
      contactSettings,
      contactList,
    });
  } catch (e) {
    console.log(e);

    if (e.status) {
      return res.status(e.status).send({ error: e.message });
    }
    return res.status(500).send({ error: 'Internal Server Error' });
  }
};

const getAdminConfig = async (req, res) => {
  try {
    const config = await loadConfig();
    const adminConfig = {
      appName: config.appName,
      adminLogo: config.adminLogo,
    };

    return res.send({
      message: 'Successfully retrieved admin config',
      adminConfig,
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
  getNavigationSettings,
  getHeroSettings,
  getAllSettings,
  getAdminConfig,
};

export default mainController;

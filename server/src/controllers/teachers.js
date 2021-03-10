import { TeacherPageSettings } from '../models/index.js';

/**
@api {put} /api/settings/teachers Update Teaacher Page Settings
@apiVersion 1.0.0
@apiName UpdateTeacherPageSettings
@apiGroup Settings

@apiParam {String} [backgroundColor] Background color
@apiParam {String} [titleLabel] Title label
@apiParam {String} [titleLabelColor] Title label color

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

const updateTeacherPageSettings = async (req, res) => {
  try {
    let settings = await TeacherPageSettings.findOne();

    if (settings) {
      settings.backgroundColor = req.body.backgroundColor;
      settings.titleLabel = req.body.titleLabel;
      settings.titleLabelColor = req.body.titleLabelColor;
    } else {
      settings = new TeacherPageSettings(req.body);
    }

    await settings.save();

    const updatedSettings = await TeacherPageSettings.findOne();

    return res.send({
      message: 'Successfully updated teacher page settings',
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
@api {get} /api/settings/teachers Get Teacher Page Settings
@apiVersion 1.0.0
@apiName GetTeacherPageSettings
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

const getTeacherPageSettings = async (req, res) => {
  try {
    let settings = await TeacherPageSettings.findOne();

    if (!settings) {
      settings = [];
    }

    return res.send({
      message: 'Successfully retrieved teacher page settings',
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

const teacherController = {
  updateTeacherPageSettings,
  getTeacherPageSettings,
};

export default teacherController;

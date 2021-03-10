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
    "message": "Successfully updated teacher page settings",
    "settings": {
        "id": "5cb2551a-a383-465c-94b2-7d63013d49bc",
        "backgroundColor": "#F4F4F4",
        "titleLabel": "Ang Ating Mga Guro",
        "titleLabelColor": "#000000",
        "createdAt": "2021-03-10T02:18:04.000Z",
        "updatedAt": "2021-03-10T02:18:04.000Z"
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
    "message": "Successfully retrieved teacher page settings",
    "settings": {
        "id": "5cb2551a-a383-465c-94b2-7d63013d49bc",
        "backgroundColor": "#F4F4F4",
        "titleLabel": "Ang Ating Mga Guro",
        "titleLabelColor": "#000000",
        "createdAt": "2021-03-10T02:18:04.000Z",
        "updatedAt": "2021-03-10T02:18:04.000Z"
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

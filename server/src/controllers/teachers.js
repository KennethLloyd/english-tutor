import { TeacherPageSettings, Teachers } from '../models/index.js';

/**
@api {put} /api/settings/teachers Update Teacher Page Settings
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

/**
@api {post} /api/teachers Add Teacher
@apiVersion 1.0.0
@apiName AddTeacher
@apiGroup Teacher

@apiParam {File} [image] Photo to upload
@apiParam {Number} order Order
@apiParam {String} firstName First name
@apiParam {String} lastName Last name
@apiParam {Boolean} status Status

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

const addTeacher = async (req, res) => {
  try {
    if (req.imageUrl) {
      req.body.photoUrl = req.imageUrl;
    }

    const teacher = new Teachers(req.body);

    await teacher.save();

    return res.send({
      message: 'Successfully added teacher',
      teacher,
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
@api {put} /api/teachers/:id Edit Teacher
@apiVersion 1.0.0
@apiName EditTeacher
@apiGroup Teacher

@apiParam {File} [image] Photo to upload
@apiParam {Number} [order] Order
@apiParam {String} [firstName] First name
@apiParam {String} [lastName] Last name
@apiParam {Boolean} [status] Status

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

const editTeacher = async (req, res) => {
  try {
    if (req.imageUrl) {
      req.body.photoUrl = req.imageUrl;
    }

    const teacher = await Teachers.findOne({ where: { id: req.params.id } });
    if (!teacher) {
      throw err(404, 'Teacher not found');
    }

    teacher.order = req.body.order;
    teacher.firstName = req.body.firstName;
    teacher.lastName = req.body.lastName;
    teacher.status = req.body.status;
    teacher.photoUrl = req.body.photoUrl ? req.body.photoUrl : teacher.photoUrl;

    await teacher.save();

    return res.send({
      message: 'Successfully updated teacher',
      teacher,
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
@api {get} /api/teachers Get All Teachers
@apiVersion 1.0.0
@apiName GetAllTeachers
@apiGroup Teachers

@apiParam {String} [page] Page
@apiParam {String} [limit] Limit
@apiParam {String} [sortBy] Key name
@apiParam {String} [sortOrder] asc/desc
@apiSuccess {String} message Success message
@apiSuccess {Array} teachers List of teachers
@apiSuccess {Number} page Page
@apiSuccess {Number} limit Limit
@apiSuccess {Number} total Total
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 Success
{
    "message": "Successfully retrieved case types",
    "case_types": [
        {
            "id": "7fb52090-f529-4bcb-853b-97b24a8d14fc",
            "name": "Attempted Rape",
            "description": "",
            "deleted_at": null,
            "created_at": "2020-10-02T13:40:32.000Z",
            "updated_at": "2020-10-02T13:40:32.000Z"
        },
        {
            "id": "91ff3f75-23f4-49ed-a3f3-1322eca8bebe",
            "name": "Attempted Trafficking",
            "description": "",
            "deleted_at": null,
            "created_at": "2020-10-02T13:40:32.000Z",
            "updated_at": "2020-10-02T13:40:32.000Z"
        },
        {
            "id": "4ec0c09f-f45a-415f-8df3-01d4bd6bad9a",
            "name": "Rape",
            "description": "",
            "deleted_at": null,
            "created_at": "2020-10-02T13:40:32.000Z",
            "updated_at": "2020-10-02T13:40:32.000Z"
        },
        {
            "id": "4b35aa74-d617-4a0a-8d76-c0cbea481eba",
            "name": "Threat of VAWC",
            "description": "",
            "deleted_at": null,
            "created_at": "2020-10-02T13:40:32.000Z",
            "updated_at": "2020-10-02T13:40:32.000Z"
        },
        {
            "id": "863f612a-5549-49f0-a792-c256c61215fb",
            "name": "Trafficking",
            "description": "",
            "deleted_at": null,
            "created_at": "2020-10-02T13:40:32.000Z",
            "updated_at": "2020-10-02T13:40:32.000Z"
        },
        {
            "id": "4c645f39-3611-4cf2-a488-5981cd293c17",
            "name": "VAWC",
            "description": "Physical, Sexual, Psychological/Emotional, Economic",
            "deleted_at": null,
            "created_at": "2020-10-02T13:40:32.000Z",
            "updated_at": "2020-10-02T13:40:32.000Z"
        }
    ],
    "total": 6,
    "page": 1,
    "limit": 10
}
*/

const getTeachers = async (req, res) => {
  let offset = null;
  let limit = null;
  let page = null;
  const sorting = [];

  if (req.query.page && req.query.limit) {
    page = parseInt(req.query.page, 10);
    limit = parseInt(req.query.limit, 10);
    offset = parseInt((req.query.page - 1) * limit, 10);
  }

  if (req.query.sortBy && req.query.sortOrder) {
    const { sortBy, sortOrder } = req.query;

    sorting.push([sortBy, sortOrder]);
  } else {
    // default
    sorting.push(['order', 'ASC']);
  }

  try {
    const data = await Teachers.findAndCountAll({
      distinct: true,
      limit,
      offset,
      order: sorting,
    });

    return res.send({
      message: 'Successfully retrieved teachers',
      teachers: data.rows,
      total: data.count,
      page,
      limit,
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
  addTeacher,
  editTeacher,
  getTeachers,
};

export default teacherController;

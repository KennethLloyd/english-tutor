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
    "message": "Successfully added teacher",
    "teacher": {
        "id": "413a14bf-5c0c-49d7-b0f5-371b896debbb",
        "order": 1,
        "firstName": "Minnie",
        "lastName": "Kim",
        "status": true,
        "photoUrl": "https://res.cloudinary.com/kennethlloyd/image/upload/v1615362964/english-courses/1615362962532-ypQiRrj.jpeg.jpg",
        "updatedAt": "2021-03-10T07:56:04.790Z",
        "createdAt": "2021-03-10T07:56:04.790Z"
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
    "message": "Successfully updated teacher",
    "teacher": {
        "id": "a7698bc3-619e-494e-aa48-214c51fdd10a",
        "order": 2,
        "firstName": "Shuhua",
        "lastName": "Yeh",
        "status": true,
        "photoUrl": "https://res.cloudinary.com/kennethlloyd/image/upload/v1615363042/english-courses/1615363040813-l1xCFvU.jpeg.jpg",
        "createdAt": "2021-03-10T07:57:22.000Z",
        "updatedAt": "2021-03-10T07:59:11.102Z"
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
@api {get} /api/teachers Get Teachers
@apiVersion 1.0.0
@apiName GetTeachers
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
    "message": "Successfully retrieved teachers",
    "teachers": [
        {
            "id": "413a14bf-5c0c-49d7-b0f5-371b896debbb",
            "order": 1,
            "firstName": "Minnie",
            "lastName": "Kim",
            "status": true,
            "photoUrl": "https://res.cloudinary.com/kennethlloyd/image/upload/v1615362964/english-courses/1615362962532-ypQiRrj.jpeg.jpg",
            "createdAt": "2021-03-10T07:56:04.000Z",
            "updatedAt": "2021-03-10T07:56:04.000Z"
        },
        {
            "id": "a7698bc3-619e-494e-aa48-214c51fdd10a",
            "order": 2,
            "firstName": "Shuhua",
            "lastName": "Yeh",
            "status": false,
            "photoUrl": "https://res.cloudinary.com/kennethlloyd/image/upload/v1615363042/english-courses/1615363040813-l1xCFvU.jpeg.jpg",
            "createdAt": "2021-03-10T07:57:22.000Z",
            "updatedAt": "2021-03-10T07:57:22.000Z"
        }
    ],
    "total": 2,
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

import Joi from 'joi';

const updateTeacherPageSettings = async (req, res, next) => {
  const bodySchema = Joi.object({
    backgroundColor: Joi.string(),
    titleLabel: Joi.string(),
    titleLabelColor: Joi.string(),
  });

  try {
    const body = await bodySchema.validateAsync(req.body);
    req.body = body;

    return next();
  } catch (err) {
    return res.status(400).send({
      error: err.details[0].message,
    });
  }
};

const addTeacher = async (req, res, next) => {
  const bodySchema = Joi.object({
    order: Joi.number().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    status: Joi.boolean().required(),
  });

  try {
    const body = await bodySchema.validateAsync(req.body);
    req.body = body;

    return next();
  } catch (err) {
    return res.status(400).send({
      error: err.details[0].message,
    });
  }
};

const editTeacher = async (req, res, next) => {
  const bodySchema = Joi.object({
    order: Joi.number(),
    firstName: Joi.string(),
    lastName: Joi.string(),
    status: Joi.boolean(),
  });

  try {
    const body = await bodySchema.validateAsync(req.body);
    req.body = body;

    return next();
  } catch (err) {
    return res.status(400).send({
      error: err.details[0].message,
    });
  }
};

const teacherValidator = {
  updateTeacherPageSettings,
  addTeacher,
  editTeacher,
};

export default teacherValidator;

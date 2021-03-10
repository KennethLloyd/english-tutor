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

const teacherValidator = {
  updateTeacherPageSettings,
};

export default teacherValidator;

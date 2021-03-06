import Joi from 'joi';

const logIn = async (req, res, next) => {
  const bodySchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
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

const hashPassword = async (req, res, next) => {
  const bodySchema = Joi.object({
    password: Joi.string().required(),
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

const authValidator = {
  logIn,
  hashPassword
};

export default authValidator;

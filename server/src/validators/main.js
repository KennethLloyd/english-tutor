import Joi from 'joi';

const updateNavigationSettings = async (req, res, next) => {
  const bodySchema = Joi.object({
    teachersLabel: Joi.string().required(),
    pricingLabel: Joi.string().required(),
    contactLabel: Joi.string().required(),
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

const updateHeroSettings = async (req, res, next) => {
  const bodySchema = Joi.object({
    backgroundOpacity: Joi.number().max(100),
    titleText: Joi.string().required(),
    titleTextColor: Joi.string().required(),
    subtitleText: Joi.string().allow(''),
    subtitleTextColor: Joi.string(),
    actionButtonText: Joi.string().allow(''),
    actionButtonTextColor: Joi.string(),
    actionButtonColor: Joi.string(),
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

const mainValidator = {
  updateNavigationSettings,
  updateHeroSettings,
};

export default mainValidator;

import Joi from 'joi';

const updatePricingPageSettings = async (req, res, next) => {
  const bodySchema = Joi.object({
    backgroundColor: Joi.string(),
    titleLabel: Joi.string(),
    titleLabelColor: Joi.string(),
    headerBackgroundColor: Joi.string(),
    headerTextColor: Joi.string(),
    detailsBackgroundColor: Joi.string(),
    detailsTextColor: Joi.string(),
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

const addPricing = async (req, res, next) => {
  const bodySchema = Joi.object({
    order: Joi.number().required(),
    header: Joi.number().required(),
    price: Joi.string().required(),
    features: Joi.array().items(Joi.string()).empty(''),
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

const editPricing = async (req, res, next) => {
  const bodySchema = Joi.object({
    order: Joi.number(),
    header: Joi.string(),
    price: Joi.string(),
    features: Joi.array().items(Joi.string()).empty(''),
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

const getPricing = async (req, res, next) => {
  const querySchema = Joi.object({
    page: Joi.string().empty(''),
    limit: Joi.string().empty(''),
    sortBy: Joi.string().empty(''),
    sortOrder: Joi.string().uppercase().valid('ASC', 'DESC').empty(''),
  });

  try {
    const query = await querySchema.validateAsync(req.query);
    req.query = query;

    return next();
  } catch (err) {
    return res.status(400).send({
      error: err.details[0].message,
    });
  }
};

const pricingValidator = {
  updatePricingPageSettings,
  addPricing,
  editPricing,
  getPricing,
};

export default pricingValidator;

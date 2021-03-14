import Joi from 'joi';

const updateContactPageSettings = async (req, res, next) => {
  const bodySchema = Joi.object({
    backgroundColor: Joi.string(),
    titleLabel: Joi.string(),
    titleLabelColor: Joi.string(),
    contactCardTitle: Joi.string(),
    contactCardTitleColor: Joi.string(),
    contactCardBackgroundColor: Joi.string(),
    footerLabel: Joi.string(),
    footerBackgroundColor: Joi.string(),
    footerTextColor: Joi.string(),
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

const addContact = async (req, res, next) => {
  const bodySchema = Joi.object({
    order: Joi.number().required(),
    platformName: Joi.string().required(),
    details: Joi.string().required(),
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

const editContact = async (req, res, next) => {
  const bodySchema = Joi.object({
    order: Joi.number(),
    platformName: Joi.string(),
    details: Joi.string(),
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

const getContacts = async (req, res, next) => {
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

const contactValidator = {
  updateContactPageSettings,
  addContact,
  editContact,
  getContacts,
};

export default contactValidator;

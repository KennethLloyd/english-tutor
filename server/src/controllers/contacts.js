import { ContactPageSettings, Contacts } from '../models/index.js';

/**
@api {put} /api/settings/contacts Update Contact Page Settings
@apiVersion 1.0.0
@apiName UpdateContactPageSettings
@apiGroup Settings

@apiParam {String} [backgroundColor] Background color
@apiParam {String} [titleLabel] Title label
@apiParam {String} [titleLabelColor] Title label color
@apiParam {String} [contactCardTitle] Contact card title
@apiParam {String} [contactCardTitleColor] Contact card title color
@apiParam {String} [contactCardBackgroundColor] Contact card background color
@apiParam {String} [footerLabel] Footer label
@apiParam {String} [footerBackgroundColor] Footer background color
@apiParam {String} [footerTextColor] Footer text color

@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "message": "Successfully updated contact page settings",
    "settings": {
        "id": "3b8f499b-d131-4081-81af-5b0bba4ee019",
        "backgroundColor": "#F4F4F4",
        "titleLabel": "Ang Ating Mga Kontaks",
        "titleLabelColor": "#000000",
        "contactCardTitle": "Title ko",
        "contactCardTitleColor": "#000000",
        "contactCardBackgroundColor": "#000000",
        "footerLabel": "paa ko",
        "footerBackgroundColor": "#000000",
        "footerTextColor": "#000000",
        "createdAt": "2021-03-14T06:24:10.000Z",
        "updatedAt": "2021-03-14T06:24:10.000Z"
    }
}
*/

const updateContactPageSettings = async (req, res) => {
  try {
    let settings = await ContactPageSettings.findOne();

    if (settings) {
      settings.backgroundColor = req.body.backgroundColor;
      settings.titleLabel = req.body.titleLabel;
      settings.titleLabelColor = req.body.titleLabelColor;
      settings.contactCardTitle = req.body.contactCardTitle;
      settings.contactCardTitleColor = req.body.contactCardTitleColor;
      settings.contactCardBackgroundColor = req.body.contactCardBackgroundColor;
      settings.footerLabel = req.body.footerLabel;
      settings.footerBackgroundColor = req.body.footerBackgroundColor;
      settings.footerTextColor = req.body.footerTextColor;
    } else {
      settings = new ContactPageSettings(req.body);
    }

    await settings.save();

    const updatedSettings = await ContactPageSettings.findOne();

    return res.send({
      message: 'Successfully updated contact page settings',
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
@api {get} /api/settings/contacts Get Contact Page Settings
@apiVersion 1.0.0
@apiName GetContactPageSettings
@apiGroup Settings

@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "message": "Successfully retrieved contact page settings",
    "settings": {
        "id": "3b8f499b-d131-4081-81af-5b0bba4ee019",
        "backgroundColor": "#F4F4F4",
        "titleLabel": "Ang Ating Mga Kontaks",
        "titleLabelColor": "#000000",
        "contactCardTitle": "Title ko",
        "contactCardTitleColor": "#000000",
        "contactCardBackgroundColor": "#000000",
        "footerLabel": "paa ko",
        "footerBackgroundColor": "#000000",
        "footerTextColor": "#000000",
        "createdAt": "2021-03-14T06:24:10.000Z",
        "updatedAt": "2021-03-14T06:24:10.000Z"
    }
}
*/

const getContactPageSettings = async (req, res) => {
  try {
    let settings = await ContactPageSettings.findOne();

    return res.send({
      message: 'Successfully retrieved contact page settings',
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
@api {post} /api/contacts Add Contact
@apiVersion 1.0.0
@apiName AddContact
@apiGroup Contacts

@apiParam {File} [image] Icon to upload
@apiParam {Number} order Order
@apiParam {String} platformName Platform name
@apiParam {String} details Details
@apiParam {Boolean} status Status

@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "message": "Successfully added contact",
    "contact": {
        "id": "0992062a-3859-40ad-b6c5-135e84c1c428",
        "order": 2,
        "platformName": "Twitter",
        "details": "twitterita",
        "status": false,
        "iconUrl": "https://res.cloudinary.com/kennethlloyd/image/upload/v1615703159/english-courses/1615703157907-cg-feat.jpg.jpg",
        "updatedAt": "2021-03-14T06:26:00.115Z",
        "createdAt": "2021-03-14T06:26:00.115Z"
    }
}
*/

const addContact = async (req, res) => {
  try {
    if (req.imageUrl) {
      req.body.iconUrl = req.imageUrl;
    }

    const contact = new Contacts(req.body);

    await contact.save();

    return res.send({
      message: 'Successfully added contact',
      contact,
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
@api {put} /api/contacts/:id Edit Contact
@apiVersion 1.0.0
@apiName EditContact
@apiGroup Contacts

@apiParam {File} [image] Icon to upload
@apiParam {Number} [order] Order
@apiParam {String} [platformName] Platform name
@apiParam {String} [details] Details
@apiParam {Boolean} [status] Status

@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "message": "Successfully updated contact",
    "contact": {
        "id": "0992062a-3859-40ad-b6c5-135e84c1c428",
        "order": 2,
        "platformName": "Twitter",
        "details": "therealmepo",
        "status": true,
        "iconUrl": "https://res.cloudinary.com/kennethlloyd/image/upload/v1615703159/english-courses/1615703157907-cg-feat.jpg.jpg",
        "createdAt": "2021-03-14T06:26:00.000Z",
        "updatedAt": "2021-03-14T06:27:17.032Z"
    }
}
*/

const editContact = async (req, res) => {
  try {
    if (req.imageUrl) {
      req.body.iconUrl = req.imageUrl;
    }

    const contact = await Contacts.findOne({ where: { id: req.params.id } });
    if (!contact) {
      throw err(404, 'Contact not found');
    }

    Object.keys(req.body).forEach((key) => {
      contact[key] = req.body[key];
    });

    await contact.save();

    return res.send({
      message: 'Successfully updated contact',
      contact,
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
@api {get} /api/contacts Get Contacts
@apiVersion 1.0.0
@apiName GetContacts
@apiGroup Contacts

@apiParam {String} [page] Page
@apiParam {String} [limit] Limit
@apiParam {String} [sortBy] Key name
@apiParam {String} [sortOrder] asc/desc
@apiSuccess {String} message Success message
@apiSuccess {Array} contacts List of contacts
@apiSuccess {Number} page Page
@apiSuccess {Number} limit Limit
@apiSuccess {Number} total Total
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 Success
{
    "message": "Successfully retrieved contacts",
    "contacts": [
        {
            "id": "0992062a-3859-40ad-b6c5-135e84c1c428",
            "order": 2,
            "platformName": "Twitter",
            "details": "therealmepo",
            "status": true,
            "iconUrl": "https://res.cloudinary.com/kennethlloyd/image/upload/v1615703159/english-courses/1615703157907-cg-feat.jpg.jpg",
            "createdAt": "2021-03-14T06:26:00.000Z",
            "updatedAt": "2021-03-14T06:27:17.000Z"
        },
        {
            "id": "cd346807-7689-4650-ae29-4dae5357911c",
            "order": 2,
            "platformName": "Phone",
            "details": "09897675543",
            "status": true,
            "iconUrl": "https://res.cloudinary.com/kennethlloyd/image/upload/v1615703300/english-courses/1615703299155-cg-feat.jpg.jpg",
            "createdAt": "2021-03-14T06:28:21.000Z",
            "updatedAt": "2021-03-14T06:28:21.000Z"
        }
    ],
    "total": 2,
    "page": 1,
    "limit": 10
}
*/

const getContacts = async (req, res) => {
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
    const data = await Contacts.findAndCountAll({
      distinct: true,
      limit,
      offset,
      order: sorting,
    });

    return res.send({
      message: 'Successfully retrieved contacts',
      contacts: data.rows,
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

/**
@api {delete} /api/contacts/:id Delete Contact
@apiVersion 1.0.0
@apiName DeleteContact
@apiGroup Contacts

@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "message": "Successfully deleted contact"
}
*/

const deleteContact = async (req, res) => {
  try {
    const contact = await Contacts.findOne({ where: { id: req.params.id } });
    if (!contact) {
      throw err(404, 'Contact not found');
    }

    await contact.destroy();

    return res.send({
      message: 'Successfully deleted contact',
    });
  } catch (e) {
    console.log(e);

    if (e.status) {
      return res.status(e.status).send({ error: e.message });
    }
    return res.status(500).send({ error: 'Internal Server Error' });
  }
};

const contactController = {
  updateContactPageSettings,
  getContactPageSettings,
  addContact,
  editContact,
  getContacts,
  deleteContact,
};

export default contactController;

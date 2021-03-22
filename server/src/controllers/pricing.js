import {
  PricingPageSettings,
  Pricings,
  PricingFeatures,
} from '../models/index.js';

import sequelize from '../db/sequelize.js';

/**
@api {put} /api/settings/pricing Update Pricing Page Settings
@apiVersion 1.0.0
@apiName UpdatePricingPageSettings
@apiGroup Settings

@apiParam {String} [backgroundColor] Background color
@apiParam {String} [titleLabel] Title label
@apiParam {String} [titleLabelColor] Title label color
@apiParam {String} [headerBackgroundColor] Header background color
@apiParam {String} [headerTextColor] Header text color
@apiParam {String} [detailsBackgroundColor] Details background color
@apiParam {String} [detailsTextColor] Details text color

@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "message": "Successfully updated pricing page settings",
    "settings": {
        "id": "e9eb4661-20e1-4a03-9eaa-9a84ace129e1",
        "backgroundColor": "#F4F4F4",
        "titleLabel": "Ang Ating Mga Presyo",
        "titleLabelColor": "#000000",
        "headerBackgroundColor": "#000000",
        "headerTextColor": "#000000",
        "detailsBackgroundColor": "#000000",
        "detailsTextColor": "#000000",
        "createdAt": "2021-03-14T01:14:31.000Z",
        "updatedAt": "2021-03-14T01:14:31.000Z"
    }
}
*/

const updatePricingPageSettings = async (req, res) => {
  try {
    let settings = await PricingPageSettings.findOne();

    if (settings) {
      settings.backgroundColor = req.body.backgroundColor;
      settings.titleLabel = req.body.titleLabel;
      settings.titleLabelColor = req.body.titleLabelColor;
      settings.headerBackgroundColor = req.body.headerBackgroundColor;
      settings.headerTextColor = req.body.headerTextColor;
      settings.detailsBackgroundColor = req.body.detailsBackgroundColor;
      settings.detailsTextColor = req.body.detailsTextColor;
    } else {
      settings = new PricingPageSettings(req.body);
    }

    await settings.save();

    const updatedSettings = await PricingPageSettings.findOne();

    return res.send({
      message: 'Successfully updated pricing page settings',
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
@api {get} /api/settings/pricing Get Pricing Page Settings
@apiVersion 1.0.0
@apiName GetPricingPageSettings
@apiGroup Settings

@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "message": "Successfully retrieved pricing page settings",
    "settings": {
        "id": "e9eb4661-20e1-4a03-9eaa-9a84ace129e1",
        "backgroundColor": "#F4F4F4",
        "titleLabel": "Ang Ating Mga Presyo",
        "titleLabelColor": "#000000",
        "headerBackgroundColor": "#000000",
        "headerTextColor": "#000000",
        "detailsBackgroundColor": "#000000",
        "detailsTextColor": "#000000",
        "createdAt": "2021-03-14T01:14:31.000Z",
        "updatedAt": "2021-03-14T01:14:31.000Z"
    }
}
*/

const getPricingPageSettings = async (req, res) => {
  try {
    let settings = await PricingPageSettings.findOne();

    return res.send({
      message: 'Successfully retrieved pricing page settings',
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
@api {post} /api/pricing Add pricing
@apiVersion 1.0.0
@apiName AddPricing
@apiGroup Pricings

@apiParam {Number} order Order
@apiParam {String} header Header
@apiParam {String} price Price
@apiParam {Boolean} status Status
@apiParam {String[]} [features] Features

@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "message": "Successfully added pricing",
    "pricing": {
        "order": 1,
        "header": "my header",
        "price": "free for you",
        "status": false,
        "features": [
            "what more do u need",
            "up on the jelly",
            "whos that pokemon"
        ]
    }
}
*/

const addPricing = async (req, res) => {
  const t = await sequelize.transaction();

  try {
    const pricing = new Pricings(req.body);

    await pricing.save({ transaction: t });

    await Promise.all(
      req.body.features.map(async (item, index) => {
        return PricingFeatures.create(
          {
            pricingId: pricing.id,
            feature: item,
            order: index + 1,
          },
          {
            transaction: t,
          },
        );
      }),
    );

    await t.commit();

    return res.send({
      message: 'Successfully added pricing',
      pricing: req.body,
    });
  } catch (e) {
    console.log(e);

    await t.rollback();

    if (e.status) {
      return res.status(e.status).send({ error: e.message });
    }
    return res.status(500).send({ error: 'Internal Server Error' });
  }
};

/**
@api {put} /api/pricing/:id Edit Pricing
@apiVersion 1.0.0
@apiName EditPricing
@apiGroup Pricings

@apiParam {Number} [order] Order
@apiParam {String} [header] Header
@apiParam {String} [price] Price
@apiParam {String[]} [features] Features
@apiParam {Boolean} [status] Status

@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "message": "Successfully updated pricing",
    "pricing": {
        "order": 5,
        "header": "starter",
        "price": "free for you",
        "status": true,
        "features": [
            "reddest red",
            "mahiwaga",
            "jeon jelly",
            "whos that pokemon"
        ]
    }
}
*/

const editPricing = async (req, res) => {
  const t = await sequelize.transaction();

  try {
    const pricing = await Pricings.findOne({ where: { id: req.params.id } });
    if (!pricing) {
      throw err(404, 'Pricing not found');
    }

    Object.keys(req.body).forEach((key) => {
      pricing[key] = req.body[key];
    });

    await pricing.save({ transaction: t });

    await PricingFeatures.destroy({
      where: {
        pricingId: req.params.id,
      },
      transaction: t,
    });

    if (req.body.features) {
      await Promise.all(
        req.body.features.map(async (item, index) => {
          return PricingFeatures.create(
            {
              pricingId: pricing.id,
              feature: item,
              order: index + 1,
            },
            {
              transaction: t,
            },
          );
        }),
      );
    }

    await t.commit();

    return res.send({
      message: 'Successfully updated pricing',
      pricing: req.body,
    });
  } catch (e) {
    console.log(e);

    await t.rollback();

    if (e.status) {
      return res.status(e.status).send({ error: e.message });
    }
    return res.status(500).send({ error: 'Internal Server Error' });
  }
};

/**
@api {get} /api/pricing Get Pricing
@apiVersion 1.0.0
@apiName GetPricing
@apiGroup Pricings

@apiParam {String} [page] Page
@apiParam {String} [limit] Limit
@apiParam {String} [sortBy] Key name
@apiParam {String} [sortOrder] asc/desc
@apiSuccess {String} message Success message
@apiSuccess {Array} pricing List of pricing
@apiSuccess {Number} page Page
@apiSuccess {Number} limit Limit
@apiSuccess {Number} total Total
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 Success
{
    "message": "Successfully retrieved pricing",
    "pricing": [
        {
            "id": "3b1838cf-4828-43cf-8541-ed53b689acc1",
            "order": 2,
            "header": "basic",
            "price": "10 dollars per hour",
            "status": true,
            "createdAt": "2021-03-14T03:33:38.000Z",
            "updatedAt": "2021-03-14T03:33:38.000Z",
            "features": [
                {
                    "id": "6932e483-20e0-4634-9cb7-2c7fd07a8d6a",
                    "pricingId": "3b1838cf-4828-43cf-8541-ed53b689acc1",
                    "feature": "everlasting support",
                    "order": 1,
                    "createdAt": "2021-03-14T03:33:38.000Z",
                    "updatedAt": "2021-03-14T03:33:38.000Z"
                },
                {
                    "id": "e89cf876-0c8e-490d-a8b0-36a94d1fc5e0",
                    "pricingId": "3b1838cf-4828-43cf-8541-ed53b689acc1",
                    "feature": "24/7 availability",
                    "order": 2,
                    "createdAt": "2021-03-14T03:33:38.000Z",
                    "updatedAt": "2021-03-14T03:33:38.000Z"
                }
            ]
        },
        {
            "id": "01a34331-bbcd-4595-bd74-37ab2d4a103a",
            "order": 5,
            "header": "starter",
            "price": "free for you",
            "status": true,
            "createdAt": "2021-03-14T01:51:24.000Z",
            "updatedAt": "2021-03-14T02:54:00.000Z",
            "features": [
                {
                    "id": "7723f975-3f1b-47f6-9675-e9df5f1ec5f2",
                    "pricingId": "01a34331-bbcd-4595-bd74-37ab2d4a103a",
                    "feature": "reddest red",
                    "order": 1,
                    "createdAt": "2021-03-14T03:28:45.000Z",
                    "updatedAt": "2021-03-14T03:28:45.000Z"
                },
                {
                    "id": "8d485e2e-d735-484b-af8a-b4c6c1206ef4",
                    "pricingId": "01a34331-bbcd-4595-bd74-37ab2d4a103a",
                    "feature": "mahiwaga",
                    "order": 2,
                    "createdAt": "2021-03-14T03:28:45.000Z",
                    "updatedAt": "2021-03-14T03:28:45.000Z"
                },
                {
                    "id": "4046246b-d6fb-487a-8af9-18b33f434be3",
                    "pricingId": "01a34331-bbcd-4595-bd74-37ab2d4a103a",
                    "feature": "jeon jelly",
                    "order": 3,
                    "createdAt": "2021-03-14T03:28:45.000Z",
                    "updatedAt": "2021-03-14T03:28:45.000Z"
                },
                {
                    "id": "67dca04b-14b1-48af-91a0-920d5632ce29",
                    "pricingId": "01a34331-bbcd-4595-bd74-37ab2d4a103a",
                    "feature": "whos that pokemon",
                    "order": 4,
                    "createdAt": "2021-03-14T03:28:45.000Z",
                    "updatedAt": "2021-03-14T03:28:45.000Z"
                }
            ]
        }
    ],
    "total": 2,
    "page": 1,
    "limit": 10
}
*/

const getPricing = async (req, res) => {
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
    const data = await Pricings.findAndCountAll({
      distinct: true,
      limit,
      offset,
      order: sorting,
    });

    const pricing = await Promise.all(
      data.rows.map(async (row) => {
        const result = await PricingFeatures.findAll({
          where: {
            pricingId: row.id,
          },
          order: ['order'],
        });

        const features = result.map((item) => item.toJSON());

        row = { ...row.dataValues, features };

        return row;
      }),
    );

    return res.send({
      message: 'Successfully retrieved pricing',
      pricing,
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
@api {delete} /api/pricing/:id Delete Pricing
@apiVersion 1.0.0
@apiName DeletePricing
@apiGroup Pricings

@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
    "message": "Successfully deleted pricing"
}
*/

const deletePricing = async (req, res) => {
  const t = await sequelize.transaction();

  try {
    const pricing = await Pricings.findOne({ where: { id: req.params.id } });
    if (!pricing) {
      throw err(404, 'Pricing not found');
    }

    await pricing.destroy();
    await PricingFeatures.destroy({
      where: {
        pricingId: req.params.id,
      },
      transaction: t,
    });

    await t.commit();

    return res.send({
      message: 'Successfully deleted pricing',
    });
  } catch (e) {
    console.log(e);

    await t.rollback();

    if (e.status) {
      return res.status(e.status).send({ error: e.message });
    }
    return res.status(500).send({ error: 'Internal Server Error' });
  }
};

const pricingController = {
  updatePricingPageSettings,
  getPricingPageSettings,
  addPricing,
  editPricing,
  getPricing,
  deletePricing,
};

export default pricingController;

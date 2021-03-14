import Sequelize from 'sequelize';
import sequelize from '../db/sequelize.js';

const { DataTypes } = Sequelize;

const PricingFeatures = sequelize.define(
  'PricingFeatures',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    pricingId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    feature: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt for each new entry
  },
);

export default PricingFeatures;

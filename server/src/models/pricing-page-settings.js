import Sequelize from 'sequelize';
import sequelize from '../db/sequelize.js';

const { DataTypes } = Sequelize;

const PricingPageSettings = sequelize.define(
  'PricingPageSettings',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    backgroundColor: {
      type: DataTypes.STRING,
    },
    titleLabel: {
      type: DataTypes.STRING,
    },
    titleLabelColor: {
      type: DataTypes.STRING,
    },
    headerBackgroundColor: {
      type: DataTypes.STRING,
    },
    headerTextColor: {
      type: DataTypes.STRING,
    },
    detailsBackgroundColor: {
      type: DataTypes.STRING,
    },
    detailsTextColor: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt for each new entry
  },
);

export default PricingPageSettings;

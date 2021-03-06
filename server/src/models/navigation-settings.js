import Sequelize from 'sequelize';
import sequelize from '../db/sequelize.js';

const { DataTypes } = Sequelize;

const NavigationSettings = sequelize.define(
  'NavigationSettings',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    logoUrl: {
      type: DataTypes.STRING,
    },
    teachersLabel: {
      type: DataTypes.STRING,
    },
    pricingLabel: {
      type: DataTypes.STRING,
    },
    contactLabel: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt for each new entry
  },
);

export default NavigationSettings;

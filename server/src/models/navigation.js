import Sequelize from 'sequelize';
import sequelize from '../db/sequelize.js';

const { DataTypes } = Sequelize;

const Navigation = sequelize.define(
  'Navigation',
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
    }
  },
  {
    timestamps: true, // adds createdAt and updatedAt for each new entry
  },
);

export default Navigation;

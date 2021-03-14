import Sequelize from 'sequelize';
import sequelize from '../db/sequelize.js';

const { DataTypes } = Sequelize;

const Contacts = sequelize.define(
  'Contacts',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    order: {
      type: DataTypes.INTEGER,
    },
    platformName: {
      type: DataTypes.STRING,
    },
    details: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
    iconUrl: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt for each new entry
  },
);

export default Contacts;

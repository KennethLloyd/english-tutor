import Sequelize from 'sequelize';
import sequelize from '../db/sequelize.js';

const { DataTypes } = Sequelize;

const Pricings = sequelize.define(
  'Pricings',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    order: {
      type: DataTypes.INTEGER,
    },
    header: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt for each new entry
  },
);

export default Pricings;

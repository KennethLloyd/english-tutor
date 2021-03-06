import Sequelize from 'sequelize';
import sequelize from '../db/sequelize.js';

const { DataTypes } = Sequelize;

const Hero = sequelize.define(
  'Hero',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    backgroundImageUrl: {
      type: DataTypes.STRING,
    },
    backgroundOpacity: {
      type: DataTypes.FLOAT,
    },
    titleText: {
      type: DataTypes.STRING,
    },
    titleTextColor: {
      type: DataTypes.STRING,
    },
    subtitleText: {
      type: DataTypes.TEXT
    },
    subtitleTextColor: {
      type: DataTypes.STRING
    },
    actionButtonText: {
      type: DataTypes.STRING
    },
    actionButtonTextColor: {
      type: DataTypes.STRING
    },
    actionButtonColor: {
      type: DataTypes.STRING
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt for each new entry
  },
);

export default Hero;

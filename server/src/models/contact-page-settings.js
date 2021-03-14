import Sequelize from 'sequelize';
import sequelize from '../db/sequelize.js';

const { DataTypes } = Sequelize;

const ContactPageSettings = sequelize.define(
  'ContactPageSettings',
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
    contactCardTitle: {
      type: DataTypes.STRING,
    },
    contactCardTitleColor: {
      type: DataTypes.STRING,
    },
    contactCardBackgroundColor: {
      type: DataTypes.STRING,
    },
    footerLabel: {
      type: DataTypes.STRING,
    },
    footerBackgroundColor: {
      type: DataTypes.STRING,
    },
    footerTextColor: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt for each new entry
  },
);

export default ContactPageSettings;

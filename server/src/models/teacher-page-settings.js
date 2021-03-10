import Sequelize from 'sequelize';
import sequelize from '../db/sequelize.js';

const { DataTypes } = Sequelize;

const TeacherPageSettings = sequelize.define(
  'TeacherPageSettings',
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
  },
  {
    timestamps: true, // adds createdAt and updatedAt for each new entry
  },
);

export default TeacherPageSettings;

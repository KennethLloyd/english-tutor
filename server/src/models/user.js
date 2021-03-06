import Sequelize from 'sequelize';
import sequelize from '../db/sequelize.js';

const { DataTypes } = Sequelize;

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'username',
      set(value) {
        this.setDataValue('username', value.trim().toLowerCase());
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt for each new entry
  },
);

export default User;

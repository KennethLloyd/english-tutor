import { Sequelize } from 'sequelize';
import configFile from '../../config/config.json';

const env = process.env.NODE_ENV || 'development';
const config = configFile[env];

const sequelize = new Sequelize(`mysql://${config.host}/${config.database}`, {
  username: config.username,
  password: config.password,
  dialectOptions: {
    timezone: 'local',
  },
  logging: false,
});

export default sequelize;

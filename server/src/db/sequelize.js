import { Sequelize } from 'sequelize';
import config from 'config';

const sequelize = new Sequelize(`mariadb://${config.get('dbHost')}/${config.get('dbName')}`, {
  username: config.get('dbUser'),
  password: config.get('dbPassword'),
  dialectOptions: {
    timezone: 'Etc/GMT+8',
  },
  logging: false,
});

export default sequelize;

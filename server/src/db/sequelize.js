import { Sequelize } from 'sequelize';
import config from 'config';

const sequelize = new Sequelize(
  `mysql://${config.get('dbHost')}/${config.get('dbName')}`,
  {
    username: config.get('dbUser'),
    password: config.get('dbPassword'),
    dialectOptions: {
      timezone: 'local',
    },
    logging: false,
  },
);

export default sequelize;

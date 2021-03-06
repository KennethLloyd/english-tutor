import mariadb from 'mariadb';
import config from 'config';
import sequelize from './sequelize.js';

const initializeDB = async () => {
  const connection = await mariadb.createConnection({
    host: config.get('dbHost'),
    user: config.get('dbUser'),
    password: config.get('dbPassword'),
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS ${config.get('dbName')}`);

  await sequelize.authenticate();
  await sequelize.sync({ alter: true }); // update schema
};

export default initializeDB;

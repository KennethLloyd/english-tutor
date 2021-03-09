import mysql from 'mysql2/promise';
import { loadConfig } from '../helpers/utils.js';
import sequelize from './sequelize.js';

const initializeDB = async () => {
  const config = await loadConfig();

  const connection = await mysql.createConnection({
    host: config.host,
    user: config.username,
    password: config.password,
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS ${config.database}`);

  await sequelize.authenticate();
  await sequelize.sync({ alter: true }); // update schema
};

export default initializeDB;

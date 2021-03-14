import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { __dirname } from './helpers/utils.js';
import initDB from './db/initialize.js';
import initRouters from './routers/index.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); // allows us to parse the request as json
app.use(cors());
app.use('/apidoc', express.static(path.join(__dirname, '../docs')));

(async () => {
  try {
    fs.mkdirSync(path.join(__dirname, '../../uploads/'));
    initRouters(app);

    if (process.env.NODE_ENV === 'production') {
      app.use(express.static(path.join(__dirname, '../../../client/build')));
      app.get('/admin', function (req, res) {
        res.sendFile(path.join(__dirname, '../../../client/build/index.html'));
      });
      app.get('*', function (req, res, next) {
        res.sendFile(path.join(__dirname, '../../../client/build/index.html'));
      });
    }

    await initDB();
    console.log('Connection to database has been established successfully');
  } catch (error) {
    console.error(`Unable to connect to the database: ${error}`);
  }
})();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log('See docs at /apidoc');
});

import jwt from 'jsonwebtoken';
import { loadConfig } from '../helpers/utils.js';

const authenticate = async (req, res, next) => {
  try {
    const config = await loadConfig();

    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, config.jwtSecret);
    const adminUsername = config.adminUsername;

    if (adminUsername !== decoded.username) {
      throw new Error();
    }

    req.token = token;

    next();
  } catch (e) {
    console.log(e);
    res.status(401).send({ error: 'Please authenticate' });
  }
};

export default authenticate;

import jwt from 'jsonwebtoken';
import config from 'config';

const authenticate = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    const adminUsername = config.get('adminUsername');

    if (adminUsername !== decoded.username) {
      throw new Error();
    }

    req.token = token;

    next();
  } catch (e) {
    res.status(401).send({ error: 'Please authenticate' });
  }
};

export default authenticate;

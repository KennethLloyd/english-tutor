import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import config from 'config';
import { err } from '../helpers/utils.js'

/**
@api {post} /api/auth/login Log In User
@apiVersion 1.0.0
@apiName LogIn
@apiGroup Auth

@apiParamExample {json} Request-Example:
{
	 "username": "tutormeplz",
	 "password": "secret123"
}

@apiSuccess {String} token Auth token
@apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg5MTkzYjhmLWE2MmYtNGQzMS05ZTQ3LWNiNDRiMmRkM2Y1ZiIsImlhdCI6MTU5NzQ5MzE2OH0.Kj6zdkvhD0_7Bb9dvnJr9oK3pu5mbO-_4JokBQC9BlU"
}
*/

const logIn = (req, res) => {
  try {
    const adminUsername = config.get('adminUsername');
    const adminPasswordHash = config.get('adminPasswordHash');

    if (adminUsername !== req.body.username) {
      throw err(400, 'Invalid credentials');
    }

    const hashedPassword = crypto.pbkdf2Sync(req.body.password, config.get('adminSalt'), 1000, 64, 'sha512').toString('hex');

    if (adminPasswordHash !== hashedPassword) {
      throw err(400, 'Invalid credentials');
    }

    const token = jwt.sign({ username: adminUsername }, config.get('jwtSecret'));

    return res.send({ token });
  } catch (e) {
    console.log(e);

    if (e.status) {
      return res.status(e.status).send({ error: e.message });
    }
    return res.status(500).send({ error: 'Internal Server Error' });
  }
};

const hashPassword = (req, res) => {
  try {
    const hashedPassword = crypto.pbkdf2Sync(req.body.password, config.get('adminSalt'), 1000, 64, 'sha512').toString('hex');

    return res.send({ hashedPassword });
  } catch (e) {
    console.log(e);

    if (e.status) {
      return res.status(e.status).send({ error: e.message });
    }
    return res.status(500).send({ error: 'Internal Server Error' });
  }
};

const authController = {
  logIn,
  hashPassword
};

export default authController;

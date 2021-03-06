import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const err = (statusCode, message) => {
  const error = new Error(message);
  error.status = statusCode;

  return error;
};

export { err, __dirname };

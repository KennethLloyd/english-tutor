import { fileURLToPath } from 'url';
import path from 'path';
import { default as fsWithCallbacks } from 'fs';

const fs = fsWithCallbacks.promises;
const env = process.env.NODE_ENV || 'development';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const configPath = `${__dirname}/../../config/config.json`;

export const loadConfig = async () => {
  const data = await fs.readFile(configPath, 'utf8');
  const obj = JSON.parse(data);
  const config = obj[env];

  return config;
};

export const err = (statusCode, message) => {
  const error = new Error(message);
  error.status = statusCode;

  return error;
};

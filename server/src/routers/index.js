import authRouter from './auth.js';
import mainRouter from './main.js';

const initializeRouter = (app) => {
  app.use('/api', authRouter);
  app.use('/api', mainRouter);
};

export default initializeRouter;

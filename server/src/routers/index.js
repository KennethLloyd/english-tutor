import authRouter from './auth.js';
import mainRouter from './main.js';
import teacherRouter from './teachers.js';

const initializeRouter = (app) => {
  app.use('/api', authRouter);
  app.use('/api', mainRouter);
  app.use('/api', teacherRouter);
};

export default initializeRouter;

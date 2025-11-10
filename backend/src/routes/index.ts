import { Router, type Express } from 'express';

import { healthRouter } from './health.route.js';

export const registerRoutes = (app: Express) => {
  const router = Router();

  router.use('/health', healthRouter);

  app.use('/api', router);
};

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import env from './config/env.js';
import logger from './utils/logger.js';
import { registerRoutes } from './routes/index.js';

const app = express();

app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

registerRoutes(app);

app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  logger.error({ err }, 'Unhandled error');

  if (err instanceof Error) {
    res.status(500).json({ errors: [{ message: err.message }] });
    return;
  }

  res.status(500).json({ errors: [{ message: 'Internal server error' }] });
});

const server = app.listen(env.PORT, () => {
  logger.info({ port: env.PORT }, 'API server running');
});

const shutdown = () => {
  logger.info('Shutting down server');
  server.close(() => process.exit(0));
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

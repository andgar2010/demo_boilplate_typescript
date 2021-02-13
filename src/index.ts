import express from 'express';
import { PORT } from 'config/constants';
import { userRouter } from 'routes';

import Sentry from '@sentry/node';

const app = express();

Sentry.init({ dsn: 'https://1b4b6e0a61504537a8d00676395f09eb@sentry.io/4877092' });

// The request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler() as express.RequestHandler);

app.use(express.json());
app.use('/users', userRouter);
// app.use();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get('/debug-sentry', function mainHandler(_req, _res) {
  throw new Error('My first Sentry error!');
});

app.use('/_healthcheck', (_req, res) => {
  res.status(200).json({ uptime: process.uptime() });
});

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler() as express.ErrorRequestHandler);

app.listen(PORT, () => {
  console.log('Running at localhost:4004');
});

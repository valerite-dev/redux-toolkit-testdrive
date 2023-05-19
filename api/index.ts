import express, { Express, Response } from 'express';

export const app: Express = express();

app.get('/api', (_, res: Response) => {
  res.send('Hello World');
});
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { routes } from './routes';
import cors from 'cors';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.static('public'));
app.use('/', routes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

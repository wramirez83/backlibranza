import express, { Express, Request, Response } from 'express';
import {router} from './routes/api';
import { tokenApi } from './config/app-config';
const path = require('path');
const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Api para la administración y gestión de contenidos para LIBRANZA oportunidades');
});

app.use(`/api/v1/${tokenApi}`, router);
app.use('/icons', express.static(path.join(__dirname, '/assets/icons')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
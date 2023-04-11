import express, { Express, Request, Response } from 'express';
import {router} from './routes/api';
import { tokenApi } from './config/app-config';
var cors = require('cors')
const path = require('path');
const app: Express = express();
const port = 3001;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Api para la administración y gestión de contenidos para LIBRANZA oportunidades');
});

app.use(`/api/v1/${tokenApi}`, router);
app.use(`/api/v1/${tokenApi}/assets`, express.static(path.join(__dirname, '/assets')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
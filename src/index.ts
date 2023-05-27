import express, { Express, Request, Response } from 'express';
import {router} from './routes/api';
import {router as routerAdmin} from './routes/apiAdmin';
import { tokenApi } from './config/app-config';
var bodyParser = require('body-parser')
var cors = require('cors')
const path = require('path');
const nodemailer = require('nodemailer');
const app: Express = express();
const port = process.env.PORT || 3001;


app.use(cors());
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Api para la administración y gestión de contenidos para LIBRANZA oportunidades');
});

app.use(`/api/v1/${tokenApi}`, router); //Route FRONT
app.use(`/api/v1/admin`, routerAdmin); //Route FRONT ADMIN
app.use(`/api/v1/${tokenApi}/assets`, express.static(path.join(__dirname, 'assets')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
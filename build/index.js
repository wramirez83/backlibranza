"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = require("./routes/api");
const app_config_1 = require("./config/app-config");
var cors = require('cors');
const path = require('path');
const app = (0, express_1.default)();
const port = 3000;
app.use(cors());
app.get('/', (req, res) => {
    res.send('Api para la administración y gestión de contenidos para LIBRANZA oportunidades');
});
app.use(`/api/v1/${app_config_1.tokenApi}`, api_1.router);
app.use(`/api/v1/${app_config_1.tokenApi}/assets`, express_1.default.static(path.join(__dirname, '/assets')));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const AuthUserController_1 = __importDefault(require("../Context/Admin/Auth/AuthUserController"));
const TextTopsController_1 = __importDefault(require("../Context/Admin/TextTop/TextTopsController"));
exports.router = (0, express_1.Router)();
exports.router.get('/', (req, res) => {
    res.status(200).json('<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>');
});
exports.router.post('/', (req, res) => {
    const user = new AuthUserController_1.default();
    user.login({
        email: req.body.email,
        password: req.body.password,
    })
        .then(result => {
        console.log(result);
        res.send(result);
    });
});
exports.router.all('/text-tops/:id?', (req, res) => {
    const text = new TextTopsController_1.default();
    if (req.method == 'GET')
        res.json('-----------');
    if (req.method == 'POST') {
        const { icons, word_one } = req.body;
        if (icons && word_one) {
            res.json(text.save({ icons: icons, word_one: word_one }));
        }
        else {
            res.json('Los Campos Son Obligatorios');
        }
    }
    if (req.method == 'DELETE') {
        const { id } = req.params;
        if (id) {
            res.json(text.delete(Number(id)));
        }
        else {
            res.json('Los Campos Son Obligatorios');
        }
    }
});
//# sourceMappingURL=apiAdmin.js.map
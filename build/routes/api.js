"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const TextTopsController_1 = __importDefault(require("../Context/TextTops/infrastructure/TextTopsController"));
const BannerController_1 = __importDefault(require("../Context/Banners/infrastructure/BannerController"));
const TestimonialsController_1 = __importDefault(require("../Context/Testimonials/infrastructure/TestimonialsController"));
const SendMailContact_1 = __importDefault(require("./../Context/Emails/SendMailContact"));
exports.router = (0, express_1.Router)();
exports.router.get('/info', (req, res) => {
    res.send('Hola.. Wilson');
});
exports.router.get('/text-tops', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new TextTopsController_1.default();
    res.json(yield controller.getAll());
}));
exports.router.get('/banners/:origin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new BannerController_1.default();
    res.json(yield controller.getAll(req.params.origin));
}));
exports.router.get('/testimonials', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const testimonials = new TestimonialsController_1.default('Activo');
    res.json(yield testimonials.getAll());
}));
exports.router.post('/contact', (req, res) => {
    SendMailContact_1.default.send(req.body, res);
});
//# sourceMappingURL=api.js.map
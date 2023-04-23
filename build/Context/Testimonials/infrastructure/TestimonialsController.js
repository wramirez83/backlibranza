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
Object.defineProperty(exports, "__esModule", { value: true });
const testimonials = require("../../../../models").testimonials;
class TestimonialsController {
    constructor(status) {
        this.user_id = 0;
        this.testimony = '';
        this.status = '';
        this.status = status;
    }
    getAll(status = 'Activo') {
        return __awaiter(this, void 0, void 0, function* () {
            return yield testimonials.findAll({
                order: [['id', 'DESC']],
                where: {
                    status: status,
                },
                limit: 3
            });
        });
    }
}
exports.default = TestimonialsController;
//# sourceMappingURL=TestimonialsController.js.map
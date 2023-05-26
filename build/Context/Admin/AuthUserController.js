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
const users = require("./../../../models").user;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
class AuthUserController {
    login(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const hash = bcrypt.hashSync(form.password, 10);
            const result = yield users.findAll({
                where: {
                    email: form.email,
                },
            });
            if (result.length == 0) {
                return {
                    status: "error",
                    msg: "usuario no existe",
                };
            }
            const tk = "09f26e402586e2f5a2ce285b009f0c3730cd9b8e1af3eb84df6611";
            const match = yield bcrypt.compare(form.password, result[0].password);
            if (match) {
                return {
                    status: "success",
                    token: jwt.sign({
                        id: result[0].id,
                        full_name: result[0].full_name,
                        email: result[0].email,
                    }, tk, { expiresIn: "1800s" }),
                };
            }
            return {
                status: 'error',
                message: 'La Contraseña no corresponde'
            };
        });
    }
}
exports.default = AuthUserController;
//# sourceMappingURL=AuthUserController.js.map
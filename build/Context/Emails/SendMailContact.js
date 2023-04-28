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
const TransportEmail_1 = require("./../../transport/TransportEmail");
class SendMailContact {
    send(dataEmail, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const mailData = {
                from: process.env.EMAIL_USERNAME || 'info@medusaweb.ml',
                to: [dataEmail.email, process.env.EMAIL_RECEPT || 'developlagobo@gmail.com'],
                subject: 'Contacto de Libranza Oportunidades',
                text: 'req.body.text',
                html: `<img src='https://www.libranzaoportunidades.com/modules/libranza/public/img/logos/Libranza%20Navidad.png'><br><b>Datos de Contacto</b><br>Nombre: ${dataEmail.fullname}<br>Email: ${dataEmail.email}<br> Tipo de Documento: ${dataEmail.typeDocument}<br>Documento: ${dataEmail.document}<br>Telefone: ${dataEmail.phone}<br>Mensaje: ${dataEmail.msg}`
            };
            yield TransportEmail_1.transporter.sendMail(mailData, (error, info) => {
                if (error) {
                    console.log(info);
                    res.status(200).json({
                        message: 'Error al enviar el email'
                    });
                }
                else {
                    res.status(201).json({
                        message: 'Email enviado'
                    });
                }
            });
        });
    }
}
exports.default = new SendMailContact();
//# sourceMappingURL=SendMailContact.js.map
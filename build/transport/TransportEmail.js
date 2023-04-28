"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
var nodemailer = require('nodemailer');
exports.transporter = nodemailer.createTransport({
    port: process.env.EMAIL_PORT || 465,
    host: process.env.EMAIL_HOST || "premium121.web-hosting.com",
    auth: {
        user: process.env.EMAIL_USERNAME || 'info@medusaweb.ml',
        pass: process.env.EMAIL_PASSWORD || 'Tureco06.',
    },
    secure: true,
});
//# sourceMappingURL=TransportEmail.js.map

var nodemailer = require('nodemailer');

export const transporter = nodemailer.createTransport({
    port: process.env.EMAIL_PORT || 465,               // true for 465, false for other ports
    host: process.env.EMAIL_HOST || "premium121.web-hosting.com",
       auth: {
            user: process.env.EMAIL_USERNAME || 'info@medusaweb.ml',
            pass: process.env.EMAIL_PASSWORD || 'Tureco06.',
         },
    secure: true,
    });
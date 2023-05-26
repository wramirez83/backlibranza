import {transporter} from './../../transport/TransportEmail';
import {Router, Request, Response } from 'express';
class SendMailContact{
    async send(dataEmail: {email: '', fullname: '', typeDocument:'', document: '', phone: '', msg: '' }, res: Response){
        const mailData =  {
            from: process.env.EMAIL_USERNAME || 'info@medusaweb.ml',
            to: [dataEmail.email, process.env.EMAIL_RECEPT || 'developlagobo@gmail.com' ],
            
            subject: 'Contacto de Libranza Oportunidades',
            text: 'req.body.text',
            html: `<img src='https://www.libranzaoportunidades.com/modules/libranza/public/img/logos/Libranza%20Navidad.png'><br><b>Datos de Contacto</b><br>Nombre: ${dataEmail.fullname}<br>Email: ${dataEmail.email}<br> Tipo de Documento: ${dataEmail.typeDocument}<br>Documento: ${dataEmail.document}<br>Telefone: ${dataEmail.phone}<br>Mensaje: ${dataEmail.msg}`
        }
        await transporter.sendMail(mailData, (error: any, info: any)=> {
            if(error) {
                console.log(info)
                res.status(200).json({
                    message: 'Error al enviar el email'
                })
                
            }else{
                res.status(201).json({
                    message: 'Email enviado'
                })
            }
        });
    
    }
}


export default new SendMailContact();
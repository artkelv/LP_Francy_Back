import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config()

const transporter = nodemailer.createTransport({
    host:"smtp-mail.outlook.com",
        port:587,
        auth: {
            user: process.env.DATA_USER,
            pass: process.env.DATA_PASS,
        }
  });
async function sendEmailForBroker(){
    const dataMessage = await transporter.sendMail({
        from: '"tutu 👻" <tututropa@hotmail.com>',
        to: "francine1919@gmail.com",
        subject: "Hello ✔", 
        text: "oi amigaaaaa",
        html: "<b>Hello world?</b>",
    })
    //console.log("resposta do nodemailer:",dataMessage)
}
sendEmailForBroker()
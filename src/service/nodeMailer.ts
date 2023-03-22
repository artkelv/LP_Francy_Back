import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { DataUserDTO } from "../dto/form";

dotenv.config();

export async function sendMessageFrancy(dataUser: DataUserDTO):Promise<any> {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GOOGLE_USER,
      pass: process.env.GOOGLE_PASS,
    },
  });

  const mailOptions = {
    from: '"Indicação Site" <kelvimarthur@gmail.com>',
    to: "francyseguro@gmail.com",
    subject: "Site Francy Seguros",
    text: "Mensagem do Site Francy Seguros",
    html: `
        <h1>Indicação do Site - Francy Seguros</h1>
        <h2>Os dados abaixo são de clientes, não compartilhe e nem use para fins mal intencionados.</h2>
        <p>Nome do Cliente: ${dataUser.nome}</p>
        <p>Email: ${dataUser.email}</p>
        <p>Telefone: ${dataUser.telefone}</p>
        <p>Plano Desejado: ${dataUser.plano}</p>
        <h3>Obrigado por usar o nosso site.</h3>
      `,
  }

  const sendEmail = await transporter.sendMail(mailOptions)
  
  const resposta = sendEmail.response.includes("250 2.0.0 OK")

  return resposta
}

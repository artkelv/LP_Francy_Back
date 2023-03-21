import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { DataUserDTO } from "../dto/form";

dotenv.config();
console.log("ola");

export async function sendMessageFrancy(dataUser: DataUserDTO) {
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  await transporter.sendMail({
    from: '"tutu 👻" <tututropa@hotmail.com>',
    to: "francyseguros@gmail.com",
    subject: "Hello ✔",
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
  });
}
console.log("FINAL");
sendMessageFrancy({
  nome: "arthur",
  email: "kelvimarthur@gmail.com",
  telefone: "885566222",
  plano: "Individual",
});

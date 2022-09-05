import express from "express";
import cors from "cors";
import { Request, Response } from "express";
import { AddressInfo } from "net";
import { LPformRouter } from "./router/LPform";

import BodyParser from "body-parser";
import { DataUserDTO } from "./dto/form";
import { FormData } from "./data/formData";
const app = express();
const port = 3000;

app.use(cors())
app.use(BodyParser.json())

app.get("/", (req:Request, res:Response) => {
  res.json({
    feitoPor:"Arthur Kelvim",
  })
});
app.post("/teste", async (req:Request, res:Response) => {
  const dataUser:DataUserDTO = {
    nome:req.body.nome,
    email:req.body.email,
    telefone:req.body.telefone,
    plano:req.body.plano
  }
  const dataForm = await new FormData().createCotation(dataUser)
  res.send({
    status:"sucess",
    dataForm
  }).status(201)
})

app.use("/form", LPformRouter)

const server = app.listen(process.env.PORT || port,() => {
  const adress = server.address() as AddressInfo
  if(server){
    console.log(`servidor, rodando na porta http://localhost:${adress.port}`)
  }else {
    console.log("erro no servidor")
  }
})
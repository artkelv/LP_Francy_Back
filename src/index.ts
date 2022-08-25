import express from "express";
import { Request, Response } from "express";
import { AddressInfo } from "net";
import { LPformRouter } from "./router/LPform";

import BodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(BodyParser.json())

app.get("/", (req:Request, res:Response) => {
  res.json({
    feitoPor:"Arthur Kelvim",
  })
});

app.use("/form", LPformRouter)

const server = app.listen(port || 3003,() => {
  const adress = server.address() as AddressInfo
  if(server){
    console.log(`servidor, rodando na porta http://localhost:${adress.port}`)
  }else {
    console.log("erro no servidor")
  }
})
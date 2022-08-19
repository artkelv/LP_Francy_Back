import { Request, Response } from "express";
import { FormBuss } from "../business/formBuss";
import { DataUserDTO } from "../dto/form";
import { CustomError } from "../error/customError";

export class FormCont {
    constructor(private formBuss:FormBuss){}
    async formLP(
        req:Request,
        res:Response
    ) {
        try {
            const dataUser:DataUserDTO = {
                nome:req.body.nome,
                email:req.body.email,
                telefone:req.body.telefone,
                plano:req.body.plano
            }
            const formLPBuss = this.formBuss.formLP(dataUser)
            res.send(formLPBuss).status(201)
        } catch (error) {
            if(error instanceof CustomError){
                res.send(error.message).status(error.statusCode)
            }else if(error){
                res.send(error).status(400)
            }else{
                res.send("Erro na solicitação ao servidor").status(500)
            }
        }
    }
}
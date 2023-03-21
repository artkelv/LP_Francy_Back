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
            const formLPBuss = await this.formBuss.formLP(dataUser)
            
            res.status(201).send(formLPBuss)
        } catch (error) {
            if(error instanceof CustomError){
                res.status(error.statusCode).send({message: error.message})
            }else if(error){
                res.status(400).send(error)
            }else{
                res.status(500).send("Erro na solicitação ao servidor")
            }
        }
    }
}
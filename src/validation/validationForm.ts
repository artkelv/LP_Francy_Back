import { DataUserDTO } from "../dto/form"
import { CustomError } from "../error/customError"

export default function validationForm(data: DataUserDTO) {
    const regexNome = /^[a-zA-Z ]+$/;
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const regexTelefone = /^[0-9]+$/;

    if(data.nome === ""){
        throw new CustomError(400, "O campo 'NOME' está vazio")
    }
    if(data.email === ""){
        throw new CustomError(400, "O campo 'EMAIL' está vazio")     
    }
    if(data.telefone === ""){
        throw new CustomError(400, "O campo 'TELEFONE' está vazio")
    }
    if(data.plano === ""){
        throw new CustomError(400, "O campo 'PLANO' está vazio")
    }


    if(!data.nome.match(regexNome)){
        throw new CustomError(400, "O campo 'NOME' não corresponde com o que esperamos")
    }
    if(!data.email.match(regexEmail)){
        throw new CustomError(400, "O campo 'EMAIL' não corresponde com o que esperamos")
    }
    if(!data.telefone.match(regexTelefone)){
        throw new CustomError(400, "O campo 'TELEFONE' não corresponde com o que esperamos")
    }
    if(data.plano !== "Individual" && data.plano !== "Familiar" && data.plano !== "Empresarial"){
        throw new CustomError(400, "O campo 'PLANO' não corresponde com o que esperamos")
    }

    const response:DataUserDTO = {
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        plano: data.plano
    }

    return response
} 
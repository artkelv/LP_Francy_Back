import { FormData } from "../data/formData";
import { DataUserDTO } from "../dto/form";
import { CustomError } from "../error/customError";

export class FormBuss {
    constructor(private formData:FormData){}
    async formLP(dataUser:DataUserDTO){
        const {nome, email, telefone, plano} = dataUser
        if(!nome || !email || !telefone || !plano){
            throw new CustomError(400, "Os campos não foram preenchidos corretamente!")
        }
        const data:DataUserDTO = {
            nome,
            email,
            telefone,
            plano
        }
        const formData = await this.formData.createCotation(data)
        console.log("RESPOSTAS BUSSNESS", formData)
        return formData
    }
}
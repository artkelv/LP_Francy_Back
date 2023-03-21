import { DataUserDTO } from "../dto/form";
import { CustomError } from "../error/customError";
import { sendMessageFrancy } from "../service/nodeMailer";
import validationForm from "../validation/validationForm";

export class FormBuss {
    constructor(){}
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

        const dataObj = validationForm(data);

        console.log("resposta tem que ser objeto", dataObj)
        
        await sendMessageFrancy(dataObj)

        return {message: "created"};
    }
}
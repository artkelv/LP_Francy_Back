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
        
        const sendEmail = await sendMessageFrancy(dataObj)

        if(sendEmail !== true){
            throw new CustomError(401, "Não foi possível enviar o email desejado, ocorreu um erro ao tentar enviar a mensagem.")
        }

        return {message: "Email sent!"};
    }
}
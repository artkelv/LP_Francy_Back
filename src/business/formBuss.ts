import { DataUserDTO } from "../dto/form";
import { CustomError } from "../error/customError";
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

        const validate = validationForm(data);

        console.log("resposta na BUSINESS", validate)

        return {message: "created"};
    }
}
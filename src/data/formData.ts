import { DataUserDTO } from "../dto/form";
import { CustomError } from "../error/customError";
import { BaseDataBase } from "./baseDataBase";

export class FormData extends BaseDataBase{
    private NAME_DB = "FormLP"

    async createCotation(dataUser:DataUserDTO):Promise<any>{
        try {
            const response = await this.connection(this.NAME_DB)
                .insert(dataUser)
            return {status:"sucessful!", response}  
        } catch (error:any) {
            new CustomError(400, error.response)
        }
    }
}
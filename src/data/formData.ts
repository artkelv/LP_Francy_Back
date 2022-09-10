
import { DataUserDTO } from "../dto/form";
import { CustomError } from "../error/customError";
import { BaseDataBase } from "./baseDataBase";

export class FormData extends BaseDataBase{
    private TABLE_NAME = "LPfrancy"

    async createCotation(dataUser:DataUserDTO):Promise<any>{
        try {
            const response = await this.connection(this.TABLE_NAME)
                .insert(dataUser)
            return {status:"sucess!", response}
        } catch (err:any) {
            throw new CustomError(400 ,err.sqlMessage || err.message)
        }
    }
}
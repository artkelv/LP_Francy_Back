/* 
import { DataUserDTO } from "../dto/form";
import { CustomError } from "../error/customError";
import { BaseDataBase } from "./baseDataBase";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, update, push } from "firebase/database";

export class FormData extends BaseDataBase{

    appFirebase = initializeApp(this.firebaseConfig)
    databaseFirebase = getDatabase(this.appFirebase)

    async createCotation(dataUser:DataUserDTO):Promise<object>{
        try {
            const db = getDatabase();
            
            push(ref(db, 'users/'), {
            username: dataUser.nome,
            email: dataUser.email,
            telefone: dataUser.telefone,
            plano: dataUser.plano
            });

            const response = {
                status: "acepted",
                message: "user add"
            } 
            return response
        } catch (err:any) {
            throw new CustomError(400 ,err.sqlMessage || err.message)
        }
    }
} */
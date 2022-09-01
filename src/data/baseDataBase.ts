import knex from "knex";
import dotenv from "dotenv";

dotenv.config()

export class BaseDataBase {
    protected connection = knex({
        client: 'mysql',
        connection: {
          host : process.env.BD_HOST_LF,
          port : 3306,
          user : process.env.BD_USER_LF,
          password : process.env.BD_PASS_LF,
          database : process.env.BD_NAME_LF
        }
      });
}
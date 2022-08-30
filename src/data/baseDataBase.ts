import knex from "knex";
import dotenv from "dotenv";

dotenv.config()

export class BaseDataBase {
    protected connection = knex({
        client: 'mysql',
        connection: {
          host : process.env.BD_HOST,
          port : 3306,
          user : process.env.BD_USER,
          password : process.env.BD_PASS,
          database : process.env.BD_NAME
        }
      });
}
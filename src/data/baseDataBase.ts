import knex from "knex";
import dotenv from "dotenv";

dotenv.config()

export class BaseDataBase {
    protected connection = knex({
        client: 'mysql',
        connection: {
          host : process.env.BD_HOST_LB,
          port : 3306,
          user : process.env.BD_USER_LB,
          password : process.env.BD_PASS_LB,
          database : process.env.BD_NAME_LB
        }
      });
}
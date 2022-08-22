import knex from "knex";
import dotenv from "dotenv";

dotenv.config()

export class BaseDataBase {
    protected connection = require('knex')({
        client: 'mysql',
        connection: {
          host : '127.0.0.1',
          port : 3306,
          user : process.env.BD_USER,
          password : process.env.BD_PASS,
          database : process.env.BD_NAME
        }
      });
}
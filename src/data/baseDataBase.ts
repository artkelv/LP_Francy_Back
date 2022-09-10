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

/*FIREBASE */ 

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCB1Y3uFm_ylSy3DCbAD4fH2VW-8OtcCmw",
  authDomain: "landing-page-francy.firebaseapp.com",
  databaseURL: "https://landing-page-francy-default-rtdb.firebaseio.com",
  projectId: "landing-page-francy",
  storageBucket: "landing-page-francy.appspot.com",
  messagingSenderId: "1002269155445",
  appId: "1:1002269155445:web:4a355a38462375f013983c"
};

const appFirebase = initializeApp(firebaseConfig);
export const databaseFirebase = getDatabase(appFirebase)

/*FIREBASE*/
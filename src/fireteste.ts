import { DataUserDTO } from "../src/dto/form"

/*FIREBASE */ 

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, update, push } from "firebase/database";

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
const databaseFirebase = getDatabase(appFirebase)

/*FIREBASE*/

function firebaseTeste(dataUser:DataUserDTO){
    const db = getDatabase();
    
    push(ref(db, 'users/'), {
    username: dataUser.nome,
    email: dataUser.email,
    telefone: dataUser.telefone,
    plano: dataUser.plano
    });
};
const data:DataUserDTO = {
    nome:"arthur Kelvim",
    email: "arthur@gmail.com",
    telefone:"999556622",
    plano: "individual"
}

firebaseTeste(data)

import dotenv from "dotenv";

dotenv.config()

export class BaseDataBase {
    protected firebaseConfig = {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGIN_SEND_ID,
      appId: process.env.APP_ID
    }; 
}

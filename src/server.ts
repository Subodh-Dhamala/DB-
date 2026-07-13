import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import { AppDataSource } from './lib/database';

const app = express();
const PORT = process.env.PORT || 4500;


app.use(express.json());

app.get('/',(req,res)=>{
  res.send('Server is working fine!');
});

async function startServer(){
  try{
    await AppDataSource.initialize();
    console.log('DB Connected!');

    app.listen(PORT,()=>{
      console.log(`Server is runnig on http://localhost:${PORT}`);

    });
  }

  catch(err){
    console.error("DB Failed!", err);
    process.exit(1);
  }

}

startServer();

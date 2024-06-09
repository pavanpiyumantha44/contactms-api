import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import './config/db.js';
import {Router} from './routes/route.js'

const app = express();
dotenv.config({path:"./config/.env"});
app.use(express.json());
app.use(cors());

app.use('/contactms',Router)

app.listen(process.env.PORT, () => {
  console.log('App is running');
});

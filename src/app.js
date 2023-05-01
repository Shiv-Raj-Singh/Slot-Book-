import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import cors from 'cors';
import './db.js';
import { globalError } from './Auth/globalError.js';
import slotCon from './Controller/slotCon.js';


const app = express()
app.use(express.json())
app.use(cors())


app.get('/' , (req,res)=>{
    res.status(200).send('Hii WELCOME ON SHIVRAJ URL-SHORTEN APP ! ')
})

app.post('/bookSlot' , slotCon)

app.use(globalError)

// app.use('/.netlify/functions/index.js')

app.listen(process.env.PORT , ()=>{
    console.log(`App is Running on ${process.env.PORT}`);
})
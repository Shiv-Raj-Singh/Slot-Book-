import dotenv from 'dotenv';
dotenv.config()
// import mongoose from 'mongoose';


// async function db(){
//     mongoose.set('strictQuery', false);
//     await mongoose.connect(`${process.env.MONGO_DB}`)
//     console.log('DataBase Connected !');
// }
// db().catch((err)=>{console.log(err.message);})


import mysql from 'mysql';


const connection = mysql.createConnection({
    host : process.env.HOST ,
    user : process.env.USER ,
    password : process.env.PASSWORD ,
    database : process.env.DATABASE
})

connection.connect((err)=>{
    if(err) console.log(err.sqlMessage);
    else console.log('MySQL Database connected');
})

export default connection



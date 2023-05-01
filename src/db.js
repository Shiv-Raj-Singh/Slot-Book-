import dotenv from 'dotenv';
import mysql from 'mysql2';
dotenv.config()
import mongoose from 'mongoose';


// async function db(){
//     mongoose.set('strictQuery', false);
//     await mongoose.connect(`${process.env.MONGO_DB}`)
//     console.log('DataBase Connected !');
// }
// db().catch((err)=>{console.log(err.message);})


const pool = mysql.createPool({
    host : process.env.HOST ,
    user : process.env.USER ,
    password : process.env.PASSWORD ,
    database : process.env.DATABASE , 
    waitForConnections: true,
    connectionLimit : 10

})

const db = pool.promise()

// const query = 'SELECT * FROM SLOTBOOKING'
// db.query(query).then((res)=>{
//     console.log(res[0]);
// })
// .catch(err=>console.log(err.message))

db.getConnection((err)=>{
    if(err) console.log(err.sqlMessage);
    else console.log('MySQL Database connected');
})

export default db



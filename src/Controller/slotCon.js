import AppError from "../Auth/globalError.js";
import { isToday, isValidDate, isValidTime } from "../Validation/validData.js";
import MySQLDB from "../db.js";

import SlotModel from "../model/slotModel.js";
import CatchAsync from "./catchasync.js";



//   POST APIs for Book the Slot 
export default CatchAsync(async function SlotBook(req,res,next){

        const {startTime , endTime , date} = req.body
        if(!isValidDate(date)) return next(new AppError('Enter A Valid Date !' , 404))
        if(isToday(date)){
            console.log('yes today');
            if(!isValidTime(startTime , endTime)) return  next(new AppError('Enter Valid Time !'  , 404))
        }                            

        let query = "SELECT * FROM SLOTBOOKING WHERE date=? AND startTime=? AND endTime=?"
        const [result] =  await MySQLDB.execute(query , [date , startTime , endTime]  )

        if(result.length) return next(new AppError('Slot Already Booked ! ' , 404))
            let sql = "INSERT INTO SLOTBOOKING (date , startTime , endTime) VALUES (? , ? , ? )"
            const data = await  MySQLDB.query(sql , [date , startTime , endTime] )
            console.log(data);
            return  res.json({
                message : 'Slot Booked Successfully ' , status : true , data : data
            })

            // await mysqlCon.query( sql , [date , startTime , endTime]  , function(err, result){
            //     // console.log(err.message , result);
            //     if(!err){
            //         return  res.json({
            //             message : 'Slot Booked Successfully ' , status : true , data : result
            //         })
            //     }
            // })

            //   MONGO-DB USED  

    // const slot = await SlotModel.findOne(req.body)
    // if(slot) return next(new AppError('Slot Already Booked !' , 404))
    // const data = await SlotModel.create(req.body)
    
    // return res.json({
    //     message : 'Slot Booked Successfully ' , status : true , data : data
    // })
    
})





    



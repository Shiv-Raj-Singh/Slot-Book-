import AppError from "../Auth/globalError.js";
import { isToday, isValidDate, isValidTime } from "../Validation/validData.js";
import mysqlCon from "../db.js";
import SlotModel from "../model/slotModel.js";
import CatchAsync from "./catchasync.js";

    export default CatchAsync(async function SlotBook(req,res,next){
    const {startTime , endTime , date} = req.body

    if(!isValidDate(date)) return next(new AppError('Enter A Valid Date !' , 404))

    if(isToday(date)){
        console.log('yes today');
        if(!isValidTime(startTime , endTime)) return  next(new AppError('Enter Valid Time !'  , 404))
    }                            
    
    const SlotBooked = await isBooked(date , startTime , endTime)
    console.log(SlotBooked);
    if(SlotBooked) return next(new AppError('Slot Already Booked ! ' , 404))
    

    let sql = "INSERT INTO SLOTBOOKING (date , startTime , endTime) VALUES (? , ? , ? )"
    // // let sql = "SELECT * FROM SLOTBOOKING"

    await mysqlCon.query( sql , [date , startTime , endTime]  , function(err, result){
        // console.log(err.message , result);
        if(!err){
            return  res.json({
                message : 'Slot Booked Successfully ' , status : true , data : result
            })
        }
    })

    //   MONGO DB USED  

    
    // const slot = await SlotModel.findOne(req.body)
    // if(slot) return next(new AppError('Slot Already Booked !' , 404))
    // const data = await SlotModel.create(req.body)
    
    // return res.json({
    //     message : 'Slot Booked Successfully ' , status : true , data : data
    // })
})



async  function isBooked(date , startTime , endTime){
    
    let sql1 = "SELECT * FROM SLOTBOOKING WHERE date=? AND startTime=? AND endTime=?"
    await mysqlCon.query( sql1, [date , startTime , endTime] , function(err, result){
        console.log(result.length  , err);
        if(err) return next(err)

        if(result.length > 0){
            return true
        } else {
            return false
        }
    })
    
}   
    


    



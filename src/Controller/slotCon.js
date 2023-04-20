import AppError from "../Auth/globalError.js";
import { isToday, isValidDate, isValidTime } from "../Validation/validData.js";
import SlotModel from "../model/slotModel.js";
import CatchAsync from "./catchasync.js";



export default CatchAsync(async function SlotBook(req,res,next){
    const {startTime , endTime , date} = req.body

    if(!isValidDate(date))  return next(new AppError('Enter A Valid Date !' , 404))
    
    if(isToday(date)){
        console.log('yes today');
        if(!isValidTime(startTime , endTime)) return  next(new AppError('Enter Valid Time !'  , 404))
    }

    const slot = await SlotModel.findOne(req.body)

    if(slot) return next(new AppError('Slot Already Booked !' , 404))

    const data = await SlotModel.create(req.body)
    
    return res.json({
        message : 'Slot Booked Successfully ' , status : true , data : data
    })
})
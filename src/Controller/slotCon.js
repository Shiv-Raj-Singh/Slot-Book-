import AppError from "../Auth/globalError.js";
import { isValidDate } from "../Validation/validData.js";
import SlotModel from "../model/slotModel.js";
import CatchAsync from "./catchasync.js";



export default CatchAsync(async function SlotBook(req,res,next){
    const {startTime , endTime , date} = req.body

    console.log(req.body , startTime , endTime , date );
    if(!isValidDate(date))  return next(new AppError('Enter A Valid Date !' , 404))

    
    const slot = await SlotModel.findOne(req.body)
    console.log(slot);
    if(slot) return next(new AppError('Slot Already Booked !' , 404))
    const data = await SlotModel.create(req.body)
    console.log(data);
    
    return res.json({
        message : 'Slot Booked Successfully ' , status : true , data : data
    })
})
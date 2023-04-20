import {Schema , model} from 'mongoose';

const TimeSlotSchema = new Schema(
    {
    startTime: {
        type: Number, 
        unique : true ,
        required : true
        
    } ,
    startTime: {
        type: Number, 
        unique : true,
        required : true
    } ,
    date: Number,
    

}, {timestamps : true })

const SlotModel = new model("Slot-Book" , TimeSlotSchema)
export default SlotModel
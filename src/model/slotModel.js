import {Schema , model} from 'mongoose';

const TimeSlotSchema = new Schema(
    {
    startTime: {
        type: String, 
        required : true
        
    } ,
    endTime: {
        type: String, 
        required : true
    } ,
    date: String, 
    

}, {timestamps : true })

const SlotModel = new model("Slot-Booking" , TimeSlotSchema)
export default SlotModel
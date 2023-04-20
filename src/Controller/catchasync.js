
// Try Catch Block 

export default function CatchAsync(controller){
   return (req,res,next)=>{
        return Promise.resolve(controller(req,res,next)).catch(next)
   }
}
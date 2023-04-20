import { createContext } from "react";
import BookSlot from "./SlotBook";

export const myContext = createContext()
export const reducer = (state , action)=>{
  console.log(state);
  switch(action.type){
    case 'UPDATE':
       return {
         ...state , [action.Key] : action.payload ,
       }

    default:
      return state
}
}


function App() {
  

  return (
    <div className="App">
        <BookSlot/>
     </div>
  )
}

export default App

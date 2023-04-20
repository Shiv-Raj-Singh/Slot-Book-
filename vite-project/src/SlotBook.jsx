import React, { useReducer, useState } from 'react'
// import './Login.css';

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { reducer } from './App';
import './App.css'


const dummyUser = { date : '' , startTime:'' , endTime : '' }

export default function BookSlot(){

    const [user, dispatch] = useReducer(reducer , dummyUser)

    const handleOnChange = (e)=>{
        dispatch({
            type : 'UPDATE' , Key : e.target.name , payload : e.target.value
        })
    }

    const handleSubmit = async  (e)=>{
        e.preventDefault()
        try {
        
            console.log(user);
            const response = await axios.post("https://book-slot.onrender.com/bookSlot" , user)
            const data = await response.data
            console.log(data);
            data.status&&toast.success(data.message , {position : 'top-center'}) 
            
        } catch (err) {
            err.response ? toast.error(err.response.data.message ,  {position : 'top-center' , theme: 'dark'}) :toast.error(err.message)
        }
    }


    return (
        <div className="JoinPage2 mt-5 pt-3">
          <div className="JoinContainer mt-3 pt-2">
            
             <form className="container customFormLogin mt-1" onSubmit={handleSubmit} method={"POST"} >
                    <h3 className="h3 text-center"> Book Your Slot </h3>
            
                    <div className="mb-1 ">
                    <label className='text-dark strong h5' for="exampleInputEmail1">Choose Date for Slot </label>
                        <input type="date" name="date" value={user.date} onChange={handleOnChange}  className="input form-control mt-2" placeholder='Choose Date' required id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-1">
                    <label className='text-dark mt-2 strong h5' for="exampleInputEmail1">Choose Start Slot </label>
                        <input type="time" value={user.startTime} name="startTime" onChange={handleOnChange}  className="input form-control mt-2" required placeholder='Start Time' id="exampleInputPassword1" />
                    </div>
                    <div className="mb-1">
                    <label  className='text-dark strong h5 mt-2' for="exampleInputEmail1">Choose End Slot </label>
                        <input type="time" value={user.endTime} name="endTime" onChange={handleOnChange}  className="input form-control mt-2" required placeholder='End Time' id="exampleInputPassword1" />
                    </div>
                                            
               
                <button type="submit" className="btn btn-primary"id='btn2' >Submit</button>
            </form>
            </div>
            <ToastContainer />
        </div>
              );
}


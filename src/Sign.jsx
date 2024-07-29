import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Sign = () => {

const navigate=useNavigate()

    const [data,setData]=useState()
    let handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    
    }
    let handleSubmit=async()=>{
try{

    let response=await axios.post('http://localhost:4000/signin',data)
    console.log(response);
    toast.success('Registration successful')
    navigate('/login')
}
catch(e){
    console.log(e);
    toast.error(e.response.data)
}
    
    
    
    }
  return (
    <div>
        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>


<div className="App">
      <div className="register-container">
        <h2>Register</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name='Name'
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name='phone'
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="place">Place</label>
            <input
              type="text"
               name='place'
              id="place"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type=""
              name='username'
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type=""
              name='password'
              onChange={handleChange}
            />
          </div>
          <button  onClick={handleSubmit}>Sign in</button>
      </div>
    </div>


    </div>
  )
}

export default Sign
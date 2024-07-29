import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {

const navigate=useNavigate()

    const [data,setData]=useState()
    let handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    
    }
    let handleSubmit=async()=>{
try{

    let response=await axios.post('http://localhost:4000/login',data)
    console.log(response);
    toast.success('login successful')
    navigate('/Addbook')
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
      <div className="login-container">
        <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type=""
              name='username'
              id="username"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type=""
              name='password'
              id="password"
              onChange={handleChange}
            />
          </div>
          <button onClick={handleSubmit} >Login</button>
      </div>
    </div>


    </div>

    
  )
}

export default Login
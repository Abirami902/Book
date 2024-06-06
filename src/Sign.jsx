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

    let response=await axios.post('http://localhost:5000/signin',data)
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

Username :<input type="" name='username' onChange={handleChange} /><br></br>
Password :<input type="" name='password' onChange={handleChange} /><br></br>
<button onClick={handleSubmit}>Sign in</button>
    </div>
  )
}

export default Sign
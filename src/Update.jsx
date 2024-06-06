import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    let {id}=useParams()
    const [data,setData]=useState()
    const [user,setUser]=useState('')

    useEffect(()=>{
        let fetchData=async()=>{

            let response=await axios.get(`http://localhost:5000/findOne/${id}`)
            console.log(response);
            setUser(response.data)
        }
        fetchData()
    },[])

    let handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    
    }
let navigate = useNavigate()

    let handleSubmit=async ()=>{
        let response=await axios.put(`http://localhost:5000/updateOne/${id}`,data)
        console.log(response);
    navigate('/')


    }
  return (
    <div className='bg'>
        <input type="" placeholder={user.bookname} name='bookname' onChange={handleChange} />
        <input type="" placeholder={user.author} name='author' onChange={handleChange} />
        <input type="" placeholder={user.des} name='des' onChange={handleChange} />
        <input type="number" placeholder={user.rate} name='rate' onChange={handleChange} />
        <input type="image" placeholder={user.img}  onChange={handleChange} id="image" alt="bookimg" src="C:\Users\HP\OneDrive\Desktop\FORTUNE\bio\1.jpg" />
       

<button onClick={handleSubmit}>update</button>

    </div>
  )
}

export default Update

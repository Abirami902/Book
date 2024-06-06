import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import FileBase64 from 'react-file-base64';


const Register = () => {
    const [data,setData]=useState()
    const [users,setUsers]=useState([])
    const [refresh,setRefresh]=useState(true)
    const [image,setImage]=useState('')


useEffect(()=>{
    let fetchdata=async()=>{
        let response=await axios.get('http://localhost:5000/view')
        console.log(response);
        setUsers(response.data)
    }
    fetchdata()
},[refresh])

let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})

}
let handleSubmit=async()=>{
    try{

        toast.success('Added successful')
        let response=await axios.post('http://localhost:5000/register',{...data,image:image})
        console.log(response);
        setRefresh(!refresh)
    }
    catch(e){
        console.log(e.response.data);
        toast.error(e.response.data)
    }


}
let handleDelete=async (id)=>{
    console.log(id);
    let response=await axios.delete(`http://localhost:5000/deleteData/${id}`) 
    console.log(response);
    setRefresh(!refresh)
}
  return (
    <div className='bg'>
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
Book Name :<input type="" name='bookname' onChange={handleChange} /> <br></br>
Author Name :<input type="" name='author' onChange={handleChange} /> <br></br>
Description :<input type="" name='des' onChange={handleChange} /><br></br>
Rating :<input type="number" name='rate' onChange={handleChange} /><br></br>
<FileBase64
        multiple={ false }y
        onDone={(res)=>setImage(res.base64)  } />
<button onClick={handleSubmit}>ADD</button>
<img src={image} width='200px' alt="" />

<div>
    {users.map((item)=>(
<>
<h2>Bookname: {item.bookname}</h2>
<h2>Author Name: {item.author}</h2>
<h2>Description : {item.des}</h2>
<h2>Rating : {item.rate}</h2>
Image available<img src={item.image} width='200px' alt="" />
<h2>ID : {item._id}</h2>

<button onClick={()=>handleDelete(item._id)}>delete</button>
<Link to={`/update/${item._id}`}><button>update</button></Link>
</>
    ))}
</div>

    </div>
  )
}

export default Register

import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import FileBase64 from 'react-file-base64';


const AddBook = () => {
    const [data,setData]=useState()
    const [users,setUsers]=useState([])
    const [refresh,setRefresh]=useState(true)
    const [image,setImage]=useState('')


useEffect(()=>{
    let fetchdata=async()=>{
        let response=await axios.get('http://localhost:4000/viewbooks')
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
        let response=await axios.post('http://localhost:4000/addbook',{...data,image:image})
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
    let response=await axios.delete(`http://localhost:4000/deleteData/${id}`) 
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


<div className="App">
      <div className="book-form-container">
        <h2>Add Book</h2>
          <div className="form-group">
            <label htmlFor="bookName">Book Name</label>
            <input
              type="text"
              name='bookname'
              id="bookName"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="authorName">Author Name</label>
            <input
              type="text"
              id="authorName"
              name='author'
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name='des'
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <input
              type="number"
              id="rating"
              name='rate'
              onChange={handleChange}
            />
          </div>



          <div className="form-group">
            <label htmlFor="image">Image URL</label>

            <FileBase64
        multiple={ false }y
        onDone={(res)=>setImage(res.base64)  } />
<button onClick={handleSubmit}>ADD</button>
<img src={image} width='200px' alt="" />

<div>
</div>
      </div>
    </div>
</div>

    </div>
  )
}

export default AddBook

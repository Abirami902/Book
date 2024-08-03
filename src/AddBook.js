import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'


const AddBook = () => {
    const [data,setData]=useState()
    const [users,setUsers]=useState([])
    const [refresh,setRefresh]=useState(true)
    const [photo,setPhoto]=useState('')


// useEffect(()=>{
//     let fetchdata=async()=>{
//         let response=await axios.get('http://localhost:4000/viewbooks')
//         console.log(response);
//         setUsers(response.data)
//     }
//     fetchdata()
// },[refresh])

const handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})

};

console.log(data);

   
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const formData = new FormData();

    formData.append('photo', photo);
    formData.append('bookname', data.bookname);
    formData.append('author', data.author);
    formData.append('des',data.des);
    formData.append('rate', data.rate);


    try {
      await axios.post('http://localhost:4000/addbook', formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setPhoto(null);
      setData('');
      setRefresh(!refresh);
      toast.success(' Book Added successfully');
    } catch (e) {
        toast.error(e || 'Error in adding ')
    }
  };


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
            <label htmlFor="rating">Rating</label>
            <input
              type="file"
              name='photo'
              placeholder='photo'
              onChange={((e)=>{setPhoto(e.target.files[0])})}

            />
          </div>

       
         
<button onClick={handleSubmit}>ADD</button>
{/* <img src={image} width='200px' alt="" /> */}

<div>
</div>
      </div>
    </div>
</div>

  )
}

export default AddBook

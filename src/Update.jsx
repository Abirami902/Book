import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    bookname: '',
    author: '',
    des: '',
    rate: '',
    img: ''
  });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/viewbooks/${id}`);
        console.log(response);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };
    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:4000/update/${id}`, book);
      toast.success('Book updated successfully');
      navigate('/');
    } catch (error) {
      console.error('Error updating book:', error);
      toast.error('Error updating book');
    }
  };

  return (
    <div>
      <h2>Update Book</h2>
      <input type="text" name="bookname" value={book.bookname} onChange={handleChange} placeholder="Book Name" />
      <input type="text" name="author" value={book.author} onChange={handleChange} placeholder="Author Name" />
      <input type="text" name="des" value={book.des} onChange={handleChange} placeholder="Description" />
      <input type="number" name="rate" value={book.rate} onChange={handleChange} placeholder="Rating" />
      <input type="text" name="img" value={book.img} onChange={handleChange} placeholder="Image URL" />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateBook;

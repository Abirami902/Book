import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewBook = () => {
  const [view, setView] = useState([]);
  const apiUrl = 'http://localhost:4000/viewbooks';

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(apiUrl);
        setView(response.data); // Assuming API response contains an array of books
      } catch (error) {
        console.error('Error fetching books:', error);
        // Handle error state if needed
      }
    };

    fetchBook();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setView(view.filter(book => book._id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
      // Handle error state if needed
    }
  };

  return (
    <>
      {view.map((item) => (
        <div key={item._id}>
          <h2>Book Name: {item.bookname}</h2>
          <h2>Author Name: {item.author}</h2>
          <h2>Description: {item.des}</h2>
          <h2>Rating: {item.rate}</h2>
          {item.image && <img src={item.image} width='200px' alt={item.bookname} />}
          <h2>ID: {item._id}</h2><br></br>
          <button onClick={() => handleDelete(item._id)}>Delete</button><br></br>
          <br></br>
          <Link to={`/update/${item._id}`}><button>Update</button></Link><br></br>
        </div>
      ))}
    </>
  );
}

export default ViewBook;

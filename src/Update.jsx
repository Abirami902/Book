import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    let { id } = useParams();
    const [data, setData] = useState({
        bookname: '',
        author: '',
        des: '',
        rate: '',
        img: ''
    });
    const [user, setUser] = useState({});

    useEffect(() => {
        let fetchData = async () => {
            try {
                let response = await axios.get(`http://localhost:4000/findOne/${id}`);
                setUser(response.data);
                setData(response.data); // Initialize data with fetched user data
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [id]);

    let handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    let navigate = useNavigate();

    let handleSubmit = async () => {
        try {
            let response = await axios.put(`http://localhost:4000/updateOne/${id}`, data);
            console.log(response);
            navigate('/');
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    return (
        <div className='bg'>
            <input 
                type="text" 
                placeholder={user.bookname} 
                name='bookname' 
                value={data.bookname}
                onChange={handleChange} 
            />
            <input 
                type="text" 
                placeholder={user.author} 
                name='author' 
                value={data.author}
                onChange={handleChange} 
            />
            <input 
                type="text" 
                placeholder={user.des} 
                name='des' 
                value={data.des}
                onChange={handleChange} 
            />
            <input 
                type="number" 
                placeholder={user.rate} 
                name='rate' 
                value={data.rate}
                onChange={handleChange} 
            />
            <input 
                type="file" 
                onChange={handleChange} 
                name='img'
                id="image" 
                alt="bookimg" 
                src={user.img}
            />
            <button onClick={handleSubmit}>update</button>
        </div>
    );
};

export default Update;

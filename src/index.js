import ReactDOM from 'react-dom/client';
import './index.css';
import React from 'react';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Navbars from './VOTING/Navbars';
import Home from './VOTING/Home';
import Login from './VOTING/Login';
import Register from './VOTING/Register';
import Addpoll from './VOTING/Addpoll';
import Viewpoll from './VOTING/Viewpoll';

// import Update from './Update';
// import Login from './Login';
// import Sign from './Sign';
// import Navbar from './Navbar';
// import AddBook from './AddBook';
// import ViewBook from './ViewBook';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes> 

   {/* <Route path='/' element={<Navbar/>}></Route>
    <Route path='/update/:id' element={<Update/>}></Route>
    <Route path='/Addbook' element={<AddBook/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signin' element={<Sign/>}></Route>
    <Route path='/viewbooks/:id' element={<ViewBook/>}></Route> */}


<Route path='/' element={<Navbars/>}>
    <Route index element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/add' element={<Addpoll/>}></Route>
    <Route path='/view' element={<Viewpoll/>}></Route>
  </Route>
   </Routes>
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

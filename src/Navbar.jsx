import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                HAVE A BREAK HAVE A BOOK
              </a>
            </div>
          </nav>
        </nav>
      </div>
      <div className='d-flex'>
        <Nav defaultActiveKey="/home" className="flex-column fs-4 custom-nav">
          <Nav.Link href="signin">Sign In</Nav.Link>
          <Nav.Link href="login">Login</Nav.Link>
          <Nav.Link href="Addbook"> Add Book</Nav.Link>
          <Nav.Link href="viewbooks/:id"> My Books</Nav.Link>
        </Nav>
        <Outlet />
<div className="home">

<img src="bg img.jpg" alt="Logo"  className="image" />
<img src="4.webp" alt="Logo"  className="image" />


</div>

      </div>
    </>
  );
};

export default Navbar;

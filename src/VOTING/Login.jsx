import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const Login = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center css1"
      style={{ backgroundColor: 'white' }} // Teal background color
    >
      <div
        className="card p-4 shadow"
        style={{
          width: '400px',
          height: 'auto',
          borderRadius: '10px',
          marginLeft:'50px',
          marginTop:'20px'
        }}
      >
        <h2 className="text-center mb-4">Login</h2>
        <form>
          <div className="mb-3 ">
            <label For="Enter your email" className="form-label fs-5">
              Email ID:
            </label>
            <input type="email" className="form-control" id="email" required />
          </div><br></br>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input type="password" className="form-control" id="password" required />
          </div><br></br>
         
          <button type="submit" className="btn btn-info  w-100">
            Login
          </button>
         
        </form>
      </div>
    </div>
  );
};

export default Login;

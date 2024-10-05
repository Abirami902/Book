import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Register = () => {
  return (
    <div className="container mt-5">
         <h2 className="mb-4">USER REGISTER </h2>
        <div className="mb-3">
          <label className="form-label">*Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
           
          />
        </div>

        <div className="mb-3">
          <label className="form-label">*Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
          
          />
        </div>

        <div className="mb-3">
          <label className="form-label">*Password:</label>
          <input
            type="password"
            name="password"
            className="form-control"
           
          />
        </div>

        <div className="mb-3">
          <label className="form-label">*Age:</label>
          <input
            type="number"
            name="age"
            className="form-control"
           
          />
        </div>
        <div className="mb-3">
          <label className="form-label">*Job:</label>
          <select
            name="job"
            className="form-select"
           
          >
            <option value="">Select your job</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Signup
        </button>
</div>
  );
};

export default Register;

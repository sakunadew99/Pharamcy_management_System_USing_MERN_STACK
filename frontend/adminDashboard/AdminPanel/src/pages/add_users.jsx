import React from 'react';
import './add_user.css'; // Import your CSS file for styling
import { useState } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

function add_users() {
    const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="form-container">
      <h2>Add Users</h2>
      <form>
        <div className="form-group">
          <label htmlFor="role">User Role:</label>
          <select id="role" name="role">
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input type="tel" id="mobile" name="mobile" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <div className="password-input-container">
            <input 
              type={passwordShown ? "text" : "password"} 
              id="password" 
              name="password" 
              className="password-input" 
            />
            <div className="password-toggle" onClick={togglePasswordVisibility}>
              {passwordShown ? (
                <BsFillEyeSlashFill className="eye-icon" />
              ) : (
                <BsFillEyeFill className="eye-icon" />
              )}
            </div>
          </div>
        </div>
        <div className="form-buttons">
          <button type="submit" className="btn btn-primary">Sign Up</button>
          <button type="reset" className="btn btn-secondary">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default add_users;

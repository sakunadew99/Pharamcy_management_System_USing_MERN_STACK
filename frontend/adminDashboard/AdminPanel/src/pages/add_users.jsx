import React, { useState } from 'react';
import './add_user.css'; // Import your CSS file for styling
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

function AddUsers() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [formData, setFormData] = useState({
    role: '',
    name: '',
    dob: '',
    mobile: '',
    email: '',
    username: '',
    password: '',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3033/api/addusers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('User data saved successfully');
        // Reset form after successful submission
        setFormData({
          role: '',
          name: '',
          dob: '',
          mobile: '',
          email: '',
          username: '',
          password: '',

        });
      } else {
        console.error('Failed to save user data');
      }
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Users</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <div className="form-group">
          <label htmlFor="role">User Role:</label>
          <select id="userRole" name="userRole" value={formData.userRole} onChange={handleChange}>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="DateOfBirth">Date of Birth:</label>
          <input type="date" id="DateOfBirth" name="DateOfBirth" value={formData.DateOfBirth} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <div className="password-input-container">
            <input 
              type={passwordShown ? "text" : "password"} 
              id="password" 
              name="password" 
              className="password-input" 
              value={formData.password}
              onChange={handleChange}
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
        {/* Additional fields */}
        
        {/* Submit and reset buttons */}
        <div className="form-buttons">
          <button type="submit" className="btn btn-primary">Sign Up</button>
          <button type="reset" className="btn btn-secondary">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default AddUsers;

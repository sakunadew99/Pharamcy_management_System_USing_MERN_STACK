import React, { useState } from 'react';
import './profile.css'; // Import your CSS file for styling
import photo from '../assets/channels4_profile.jpg'; // Import your profile photo

function Profile() {
  // Sample user data (replace it with your actual user data)
  const [user, setUser] = useState({
    id: 1,
    name: 'John Doe',
    profilePhoto: photo,
    dob: '1990-01-01',
    username: 'john.doe',
    email: 'john@example.com',
    address: '123 Main St, City, Country',
    mobile: '123-456-7890',
  });

  // Sample function to handle password change
  const handleChangePassword = () => {
    // Implement your logic for changing password here
    console.log('Changing password...');
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <div className="profile-details">
        <div className="profile-photo">
          <img src={user.profilePhoto} alt="Profile" />
        </div>
        <div className="profile-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Date of Birth:</strong> {user.dob}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Mobile:</strong> {user.mobile}</p>
        </div>
      </div>
      <div className="change-password">
        <h3>Change Password</h3>
        <button onClick={handleChangePassword}>Change Password</button>
      </div>
    </div>
  );
}

export default Profile;

import React from 'react';
import './view_users.css'; // Import your CSS file for styling
import Axios from 'axios';
import { useEffect,useState } from 'react';

function view_users() {
  // Sample user data (replace it with your actual user data)
  const [users,setUsers] = React.useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await Axios.get('http://localhost:3033/api/users');
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="table-container">
      <h2>View Users</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>User Role:</th>
            <th>Name:</th>
            <th>Date of Birth:</th>
            <th>Mobile Number:</th>
            <th>Email Address:</th>
            <th>User Name:</th>
            
            
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.userRole}</td>
              <td>{user.name}</td>
              <td>{user.DateOfBirth}</td>
              <td>{user.mobile}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default view_users;

import React from 'react'
import './update_users.css'

function update_users() {
    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin' },
        { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'User' },
        // Add more users as needed
      ];
    
      // Function to handle deleting a user
      const handleDelete = (userId) => {
        // Implement your delete logic here
        console.log(`Deleting user with ID ${userId}`);
      };
    
      // Function to handle editing a user
      const handleEdit = (userId) => {
        // Implement your edit logic here
        console.log(`Editing user with ID ${userId}`);
      };
    
      return (
        <div className="table-container">
          <h2>View Users</h2>
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th> {/* New column for actions */}
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td className="action-buttons">
                    <button className='edit' onClick={() => handleEdit(user.id)}>Edit</button>
                    <button className='delete' onClick={() => handleDelete(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }       



export default update_users
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../../services/userService';

const UserUpdate = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await UserService.getUserById(userId);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, [userId]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await UserService.updateUser(userId, user);
      alert('User Updated Successfully');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="first_name" value={user.first_name} onChange={handleChange} placeholder="First Name" />
        <input type="text" name="last_name" value={user.last_name} onChange={handleChange} placeholder="Last Name" />
        <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UserUpdate;

import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserService from '../../services/userService';

const UserDelete = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const deleteUser = async () => {
      try {
        await UserService.deleteUser(userId);
        alert('User Deleted Successfully');
        navigate('/users'); // Redirect to the user list after deletion
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    };
    deleteUser();
  }, [userId, navigate]);

  return <div>Deleting User...</div>;
};

export default UserDelete;

import React, { useState } from 'react';
import UserService from '../../services/userService';  // Import the service

const UserForm = ({ user, onSave, isEditing }) => {
  const [formData, setFormData] = useState(user || {
    first_name: '',
    last_name: '',
    password: '',
    confirmPassword: '',
    user_id: '',
    email: '',
    gender: '',
    status: '',
    role: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await UserService.updateUser(formData.user_id, formData);
    } else {
      await UserService.createUser(formData);
    }
    onSave();  // Callback to refresh the user list
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="first_name"
        placeholder="First Name"
        value={formData.first_name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="last_name"
        placeholder="Last Name"
        value={formData.last_name}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="gender"
        placeholder="Gender"
        value={formData.gender}
        onChange={handleChange}
      />
      <input
        type="text"
        name="status"
        placeholder="Status"
        value={formData.status}
        onChange={handleChange}
      />
      <input
        type="number"
        name="role"
        placeholder="Role"
        value={formData.role}
        onChange={handleChange}
      />
      <button type="submit">{isEditing ? 'Update' : 'Create'} User</button>
    </form>
  );
};

export default UserForm;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../../services/userService";

function CreateUser() {
    const [status, setStatus] = useState('typing');
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    password: "",
    confirmPassword: "",
    email: "",
    status: "Active",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      setStatus('sending')
      const response = UserService.createUser(formData);

      //   await fetch("/api/users", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(formData),
      //   });
      console.log(response);
      if (response.ok) {
        navigate("/users");
      } else {
        console.error("Failed to create user.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
const isSending = status ==='sending';
const isSent=status==='sent'
if(isSent){
    return <h1>Thanks for feedback</h1>
}
  return (
    <div>
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="first_name"
          disabled={isSending}
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="last_name"
          disabled={isSending}
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          disabled={isSending}
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          disabled={isSending}
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          disabled={isSending}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button disabled={isSending} type="submit">Create User</button>
      </form>
    </div>
  );
}

export default CreateUser;

// import React, { useState } from 'react';
// import UserService from '../../services/userService';  // Import the service

// const UserCreate = ({ user, onSave, isEditing }) => {
//   const [formData, setFormData] = useState(user || {
//     first_name: '',
//     last_name: '',
//     password: '',
//     confirmPassword: '',
//     user_id: '',
//     email: '',
//     gender: '',
//     status: '',
//     role: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (isEditing) {
//       await UserService.updateUser(formData.user_id, formData);
//     } else {
//       await UserService.createUser(formData);
//     }
//     onSave();  // Callback to refresh the user list
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="first_name"
//         placeholder="First Name"
//         value={formData.first_name}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="last_name"
//         placeholder="Last Name"
//         value={formData.last_name}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         value={formData.password}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         name="confirmPassword"
//         placeholder="Confirm Password"
//         value={formData.confirmPassword}
//         onChange={handleChange}
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="gender"
//         placeholder="Gender"
//         value={formData.gender}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="status"
//         placeholder="Status"
//         value={formData.status}
//         onChange={handleChange}
//       />
//       <input
//         type="number"
//         name="role"
//         placeholder="Role"
//         value={formData.role}
//         onChange={handleChange}
//       />
//       <button type="submit">{isEditing ? 'Update' : 'Create'} User</button>
//     </form>
//   );
// };

// export default UserCreate;

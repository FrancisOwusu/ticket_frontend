import React, { useEffect, useState } from "react";
import UserService from "../../services/userService";
import UserForm from "./userForm";
import { useNavigate } from "react-router-dom";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState({});
  const navigate = useNavigate();
  const fetchUsers = async () => {
    try {
      const response = await UserService.getUsers();
      setUsers(response.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Navigate to the 401 Unauthorized page
        navigate("/unauthorized");
      } else {
        console.log("Error:", error.message);
      }
    }
  };

  const handleEdit = (user) => {
    console.log(user);
    setEditingUser(user);
    console.log(editingUser);
  };

  const handleDelete = async (userId) => {
    await UserService.deleteUser(userId);
    fetchUsers(); // Refresh the list after deletion
  };

  const handleSave = () => {
    setEditingUser(null);
    fetchUsers(); // Refresh the list after save
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User Management</h2>
      <UserForm
        user={editingUser}
        onSave={handleSave}
        isEditing={!!editingUser}
      />

      <h3>User List</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.first_name} {user.last_name} ({user.email}) - {user.status}
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user.user_id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

import React, { useEffect, useState } from "react";
import UserService from "../../services/userService";
import UserForm from "./userForm";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    const response = await UserService.getUsers();
    setUsers(response.data);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
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

import React, {useEffect, useState } from "react";
import UserService from "../../services/userService";
const UserList = () => {
  const [users, setUsers] = useState([]);
  //   const [editingUser, setEditingUser] = useState(null);

  const fetechUsers = async () => {
    const response = await UserService.getUsers();
    console.log(response.data)
    setUsers(response.data);
  };
  useEffect(() => {
    fetechUsers();
  }, []);

  return (
    <div>
      <h2>User Management</h2>
      <h3>User List</h3>
      <ul>
        {users.map((user) => (
          <li key={user.user_id}>
            {user.first_name} {user.last_name} ({user.email}) - {user.status}
            {/* <button onClick={() => handleEdit(user)}>Edit</button>
              <button onClick={() => handleDelete(user.user_id)}>Delete</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

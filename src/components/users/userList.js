import React, { useEffect, useState } from "react";
import UserService from "../../services/userService";
import DataTable from 'react-data-table-component';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

// import UserForm from "./userForm";
import { Link, useNavigate } from "react-router-dom";
const UserList = () => {
  const [users, setUsers] = useState([]);
  // const [editingUser, setEditingUser] = useState({});
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

  // const handleEdit = (user) => {
  //   console.log(user);
  //   setEditingUser(user);
  //   console.log(editingUser);
  // };

  // const handleDelete = async (userId) => {
  //   await UserService.deleteUser(userId);
  //   fetchUsers(); // Refresh the list after deletion
  // };

  // const handleSave = () => {
  //   // setEditingUser(null);
  //   fetchUsers(); // Refresh the list after save
  // };
  useEffect(() => {
    fetchUsers();
  }, []);
  const columns = [
    { name: 'First Name', selector: row => row.first_name, sortable: true },
    { name: 'Last Name', selector: row => row.last_name, sortable: true },
    { name: 'Email', selector: row => row.email, sortable: true },
    { name: 'Status', selector: row => row.status, sortable: true },
    {
      name: 'Actions',
      cell: row => (
        <div>
          <Link to={`/users/edit/${row.id}`}>
            <button>Edit</button>
          </Link>
          {/* <button onClick={() => handleDelete(row.user_id)}>Delete</button> */}
        </div>
      ),
    },
  ];

  return (
    <DataTable columns={columns} data={users} />
  );
};

export default UserList;

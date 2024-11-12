import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/userService";
import { AuthContext } from "../../context/AuthContext";
import { useNotification } from "../../context/SAlertNotification";
function CreateUser() {
  const { showAlert } = useNotification();
  const [status, setStatus] = useState("typing");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    password: "",
    confirmPassword: "",
    email: "",
    status: "Active",
    user_id: localStorage.getItem("userId"),
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setStatus("sending");
      const response = await UserService.createUser(formData);

      if ((response.status = 201)) {
        showAlert({
          title: "Success!",
          message: response.data.message,
          type: "success",
        });
        navigate("/users");
      } else {
        console.error("Failed to create user.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const isSending = status === "sending";
  const isSent = status === "sent";
  if (isSent) {
    return <h1>Thanks for feedback</h1>;
  }
  return (
    <div>
      <h2>Create New User</h2>
      <Link to="users">Users</Link>
      <div className="container">
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
          <button disabled={isSending} type="submit">
            Create User
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;

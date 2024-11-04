import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/userService";
import { AuthContext } from "../../context/AuthContext";

import { useNotification } from "../../context/SAlertNotification";
const EditUser = () => {
  const { showAlert } = useNotification();
  const [status, setStatus] = useState("typing");

  const [user, setUser] = useState(null); // State to store user details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const { userId } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    password: "",
    confirmPassword: "",
    email: "",
    status: "",
    user_id: "",
  });
  useEffect(() => {
    // Define the fetchUser function to get user details
    const fetchUser = async () => {
      try {
        const response = await UserService.getUserById(userId);
        if(response.status!=200) throw new Error("Error fetching user details");
       setFormData(response.data.data);
        setUser(response.data.data); // Set user data in state
      } catch (err) {
        setError(err.message); // Handle any errors
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    fetchUser(); // Call the fetchUser function on component mount
  }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

  //   const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      setStatus("sending");
      const response = await UserService.EditUser(userId,formData);

      if ((response.status = 201)) {
        showAlert({
          title: "Success!",
          message: response.data.message,
          type: "success",
        });
        // navigate("/users");
      } else {
        console.error("Failed to create user.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const isSending = status === "sending";
  return (
    <div>
      <h2>Create New User</h2>
      
        <Link to="users">Users</Link>
      
      <div className="container">
        <form onSubmit={handleUpdate}>
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
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;

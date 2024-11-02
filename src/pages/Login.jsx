import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { loginService } from "../services/authService";
import { Navigate, redirect, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [formError, setFormError] = useState(""); // State to hold form validation errors

  const { login, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate(); // Hook for programmatic navigation
  const validateForm = () => {
    if (!email) {
      setFormError("Email is required");
      return false;
    }
    // Regex for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormError("Please enter a valid email address");
      return false;
    }
    if (!password) {
      setFormError("Password is required");
      return false;
    }
    if (password.length < 6) {
      setFormError("Password should be at least 6 characters");
      return false;
    }
    setFormError(""); // Clear the form errors if all fields are valid
    return true;
  };
  async function handleLogin(e) {
    e.preventDefault();
    try {
      // Validate the form before submitting
      if (!validateForm()) {
        return;
      }
      const { token, error } = await loginService(email, password);
      if (token) {
        login(token);
        navigate("/dashboard"); // Redirect to the dashboard after successful login
      }
      if (error) {
        setError("Invalid credentials, please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  }

  function handleReset() {
    setPassword("");
    setEmail("");
  }
  // if (isAuthenticated) {
  //   navigate("/dashboard");
  // }
  return (
    <div className="container" style={{ marginTop: "10vh" }}>
      <form method="post" onSubmit={handleLogin}>
        <h2>Login to your account</h2>
        {formError && <p style={{ color: "red" }}>{formError}</p>}{" "}
        {/* Display form validation error */}
        {error && <p style={{ color: "red" }}>{error}</p>}{" "}
        {/* Display login error */}
        {/* Display the error */}
        <p>Welcome back!</p>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address :
          </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="form-control"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password :
          </label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="form-control"
            id="password"
          />
        </div>
        <button type="reset" className="btn btn-danger">
          Reset
        </button>
        <button type="submit" className="btn btn-primary">
          LOG IN
        </button>
      </form>
    </div>
  );
};

export default Login;

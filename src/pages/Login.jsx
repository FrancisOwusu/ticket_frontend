import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { loginService } from "../services/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);

  async function handleLogin(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    try {
      const { token } = await loginService(email, password);
      login(token);
    } catch (err) {
      setError("Invalid credentials,Please try again.");
    }
  }

  function handleReset() {
    setPassword("");
    setEmail("");
  }

  return (
    <div className="container" style={{ marginTop: "10vh" }}>
      <form method="post" onSubmit={handleLogin}>
        <h2>Login to your account</h2>
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

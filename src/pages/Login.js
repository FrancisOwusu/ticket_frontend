import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    alert("Submitting!");

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch("/some-api", { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }
  
  
  function handleReset() {
    setPassword("");
    setEmail("");
  }
  function handleSubmit(e) {}
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
        <button type="reset" className="btn btn-danger">Reset</button>
        <button type="submit" className="btn btn-primary">
          LOG IN
        </button>
      </form>
    </div>
  );
};

export default Login;

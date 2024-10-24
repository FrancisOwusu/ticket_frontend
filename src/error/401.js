import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error401 = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>401 - Unauthorized</h1>
      <p style={styles.message}>
        Oops! It seems you are not authorized to view this page.
      </p>
      <button style={styles.button} onClick={handleLoginRedirect}>
        Go to Login Page
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: '3rem',
    color: '#333',
  },
  message: {
    fontSize: '1.2rem',
    color: '#777',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Error401;

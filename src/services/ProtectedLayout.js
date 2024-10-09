import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';  // Adjust path as needed

const ProtectedLayout = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Outlet renders child routes if authenticated
  return (
    <div>
      <h2>Protected Layout</h2>
      <Outlet /> {/* This will render the child routes */}
    </div>
  );
};

export default ProtectedLayout;

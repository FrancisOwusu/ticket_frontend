import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Importing pages and components
import Dashboard from "./pages/Dashboard";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";

import NotFoundPage from "./pages/NotFoundPage";
import Contact from "./pages/Contact";
import ProtectedRoute from "./services/ProtectedRoute";
import Users from "./pages/Users";
import Error401 from "./error/401";
const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      {/* <Route path="/" element={<Welcome />} errorElement={<NotFoundPage />} /> */}
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Welcome />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/contact"
        element={
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        }
      />

      <Route
        path="/users"
        children
        element={
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        }
      />
      {/* <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/contact" element={<Contact />} /> */}
      {/* Catch-all for 404 */}
      <Route path="*" element={<Navigate to="/login" replace />} />
      <Route path="/unauthorized" element={<Error401 />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default AppRoutes;

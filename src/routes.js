import React from "react";
import { Routes, Route } from "react-router-dom";

// Importing pages and components
import Dashboard from "./pages/Dashboard";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";

import NotFoundPage from "./pages/NotFoundPage";
const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route  path="/" element={<Welcome />} errorElement={<NotFoundPage />}/>
      <Route path="/login" element={<Login  />}/>
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Catch-all for 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;

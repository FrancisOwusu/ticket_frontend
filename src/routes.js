import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Importing pages and components
import Dashboard from "./pages/Dashboard";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";

// import NotFoundPage from "./pages/NotFoundPage";
import Contact from "./pages/Contact";
import ProtectedRoute from "./services/ProtectedRoute";
// import Users from "./pages/Users";
import Error401 from "./error/401";
// import HistoryRoutes from "./routes/users";
import UserRoutes from "./routes/users";
import UserCreate from "./pages/user/UserCreate";
// import UserUpdate from "../pages/user/UserUpdate";
import UserEdit from "./pages/user/UserEdit";
import UserDelete from "./pages/user/UserDelete";
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
{/* users route */}

      <Route
        path="/users"
        // children
        element={
         

            <UserRoutes />
          
        }
      />

<Route path="users/create" element={
  <ProtectedRoute><UserCreate /></ProtectedRoute>} />
        <Route path="users/edit/:id" element={<ProtectedRoute><UserEdit /></ProtectedRoute>} />
        <Route path="users/update/:id" element={<h3>Update History</h3>} />
        <Route path="users/delete/:id" element={<ProtectedRoute><UserDelete /></ProtectedRoute>} />
      


      {/* <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/contact" element={<Contact />} /> */}
      {/* Catch-all for 404 */}
      {/* <Route path="/history" element={<HistoryRoutes />} /> */}
      <Route path="*" element={<Navigate to="/login" replace />} />
      <Route path="/unauthorized" element={<Error401 />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default AppRoutes;

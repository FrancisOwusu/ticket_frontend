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
// import UserRoutes from "./routes/users";
import UserCreate from "./pages/user/UserCreate";
// import UserUpdate from "../pages/user/UserUpdate";
import UserEdit from "./pages/user/UserEdit";
import UserDelete from "./pages/user/UserDelete";
import Users from "./pages/Users";
const AppRoutes = () => {
  return (
    <Routes>
    <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
      <Route path="/unauthorized" element={<Error401 />} />

      {/* <Route element={<ProtectedRoute />}> */}
      {/* <Route path="/" element={<Welcome />} /> */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/users" element={<Users />}/>
          <Route path="users/create" element={<UserCreate />} />
          <Route path="users/edit/:id" element={<UserEdit />} />
          <Route path="users/update/:id" element={<h3>Update History</h3>} />
          <Route path="users/delete/:id" element={<UserDelete />} />
      
    </Routes>
  );
};

export default AppRoutes;

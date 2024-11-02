import { Routes, Route, Outlet } from "react-router-dom";
import Users from "../pages/Users";
import UserCreate from "../pages/user/UserCreate";
import UserUpdate from "../pages/user/UserUpdate";
import UserDelete from "../pages/user/UserDelete";

function UserPage() {
  return (
    <div>
      <Users />
      <Outlet /> {/* This renders the nested routes */}
    </div>
  );
}

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserPage />}>
        <Route path="/create" element={<UserCreate />} />
        <Route path="/edit/:id" element={<UserUpdate />} />
        <Route path="/update/:id" element={<h3>Update History</h3>} />
        <Route path="/delete/:id" element={<UserDelete />} />
      </Route>
    </Routes>
  );
}

export default UserRoutes;

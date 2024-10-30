import { Link } from "react-router-dom";
import UserList from "../components/users/userList";
const Users = () => {
  return (
    <>
         <a><Link to="create">Create User</Link></a>
      <UserList />
    </>
  );
};
export default Users;

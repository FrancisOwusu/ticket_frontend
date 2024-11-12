import { Link } from "react-router-dom";
import UserList from "../pages/user/UserList";
const Users = () => {
  return (
    <>
    <Link to="create">Create User</Link>
      {/* <a>
        <Link to="create">Create User</Link>
      </a> */}
      <UserList />
    </>
  );
};
export default Users;

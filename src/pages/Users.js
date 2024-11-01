import { Link } from "react-router-dom";
import UserList from "../components/users/userList";
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

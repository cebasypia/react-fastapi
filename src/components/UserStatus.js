import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { Outlet,Link } from "react-router-dom";
const UserStatus = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>User Status</h1>
      <p>{user ? user.email : "User is not Authenticated"}</p>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/auth">Auth Page</Link>
      </li>
      <li>
        <Link to="/users">Users Page</Link>
      </li>
      <Outlet />
    </div>
  );
};
export default UserStatus;

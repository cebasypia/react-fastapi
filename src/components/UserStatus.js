import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
const UserStatus = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>User Status</h1>
      <p>{user ? user.email : "User is not Authenticated"}</p>
    </div>
  );
};
export default UserStatus;

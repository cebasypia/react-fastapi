import { Link } from "react-router-dom";
import { useGetUsers } from "../../hooks/useGetUsers";

const UserIndex = () => {
  const [users, isLoading] = useGetUsers();

  return (
    <div>
      <h1>UserIndex</h1>
      <li>
        <Link to="123">UserProfile</Link>
      </li>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        users.map((user) => (
          <ol key={user.id}>
            <Link to={user.id}>{user.name}</Link>
          </ol>
        ))
      )}
    </div>
  );
};
export default UserIndex;

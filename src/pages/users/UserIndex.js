import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserIndex = () => {
  const [users, setUsers] = useState([]);
  const APP_URL = `http://localhost:8000/users`;

  useEffect(() => {
    fetch(APP_URL)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, [APP_URL]);

  return (
    <div>
      <h1>UserIndex</h1>
      <li>
        <Link to="123">UserProfile</Link>
      </li>
      {users.map((user) => (
        <ol key={user.id}>
          <Link to={user.id}>{user.name}</Link>
        </ol>
      ))}
    </div>
  );
};
export default UserIndex;

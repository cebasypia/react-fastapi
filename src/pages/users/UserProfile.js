import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1, { replace: true });
  };
  return (
    <div>
      <h1>UserProfile</h1>
      <li>
        <button onClick={handleClick}>UserIndex</button>
      </li>
    </div>
  );
};
export default UserProfile;

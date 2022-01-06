import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAuth,
  onAuthStateChanged,
  getIdToken,
  updateProfile,
} from "firebase/auth";
import { useGetUser } from "../../hooks/useGetUser";

const UserProfile = () => {
  const { id } = useParams();
  const [user, isLoading] = useGetUser(id);
  const [newUserName, setNewUserName] = useState("");
  const auth = getAuth();

  const onClick = () => {
    updateProfile(auth.currentUser, {
      displayName: newUserName,
    })
      .then(() => {
        console.log("Profile updated!");
      })
      .catch((error) => {
        console.log("An error occurred", error);
      });
  };

  const handleOnChange = (e) => {
    setNewUserName(e.target.value);
  };

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
      {isLoading ? (
        <div>Loading</div>
      ) : (
        user && (
          <div key={user.id}>
            <ol>{user.id}</ol>
            <ol>{user.name}</ol>
            {user.id === auth.currentUser.uid && (
              <div>
                <input
                  value={newUserName}
                  name="name"
                  type="text"
                  onChange={handleOnChange}
                ></input>
                <button onClick={onClick}>更新</button>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};
export default UserProfile;

import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAuth,
  updateProfile,
} from "firebase/auth";
import { useGetUser } from "../../hooks/useUser";

const UserProfile = () => {
  const { id } = useParams();
  const [user, isLoading] = useGetUser(id);
  const displayNameEl = useRef(null);
  const auth = getAuth();

  const onClick = () => {
    updateProfile(auth.currentUser, {
      displayName: displayNameEl.current.value,
    })
      .then(() => {
        console.log("Profile updated!");
      })
      .catch((error) => {
        console.log("An error occurred", error);
      });
  };

  const navigate = useNavigate();
  const backward = () => {
    navigate(-1, { replace: true });
  };

  return (
    <div>
      <h1>UserProfile</h1>
      <li>
        <button onClick={backward}>UserIndex</button>
      </li>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        user && (
          <div key={user.id}>
            <ol>{user.id}</ol>
            <ol>{user.name}</ol>
            {user.id !== auth?.currentUser?.uid && (
              <div>
                <input
                  ref={displayNameEl}
                  type="text"
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

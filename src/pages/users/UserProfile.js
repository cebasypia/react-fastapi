import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAuth,
  onAuthStateChanged,
  getIdToken,
  updateProfile,
} from "firebase/auth";

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [newUserName, setNewUserName] = useState("");
  const { id } = useParams();
  const APP_URL = `http://localhost:8000/users/${id}`;
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        getIdToken(user).then((idToken) => {
          fetch(APP_URL, {
            method: "GET",
            headers: new Headers({
              Authorization: `Bearer ${idToken}`,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              setUser(data);
            });
        });
        // ...
      } else {
        // User is signed out
        // ...
        console.log("User is not Authenticated");
      }
    });
  }, [APP_URL, auth]);

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
      {user && (
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
      )}
    </div>
  );
};
export default UserProfile;

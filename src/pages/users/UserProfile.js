import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAuth, onAuthStateChanged, getIdToken } from "firebase/auth";

const UserProfile = () => {
  const [user, setUser] = useState({});
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
      {user && <ol key={user.id}>{user.name}</ol>}
    </div>
  );
};
export default UserProfile;

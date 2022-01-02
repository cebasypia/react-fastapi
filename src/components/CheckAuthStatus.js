import { getAuth, onAuthStateChanged, getIdToken } from "firebase/auth";

const CheckAuthStatus = () => {
  const handleClick = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        getIdToken(user)
          .then((idToken) => console.log(idToken))
        console.log(auth)
        console.log(user);
        // ...
      } else {
        // User is signed out
        // ...
        console.log("User is not Authenticated");
      }
    });
  };

  return (
    <div>
      <h1>Check Auth Status</h1>

      <div>
        <button onClick={handleClick}>Check Auth Status</button>
      </div>
    </div>
  );
};

export default CheckAuthStatus;

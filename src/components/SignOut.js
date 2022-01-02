import { getAuth, signOut } from "firebase/auth";
const SignOut = () => {
  const handleClick = () => {
    const auth = getAuth();
    signOut(auth)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.error(error.message);
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Sign Out</h1>

      <div>
        <button onClick={handleClick}>Sign Out</button>
      </div>
    </div>
  );
};

export default SignOut;

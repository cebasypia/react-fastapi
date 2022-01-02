import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import CheckAuthStatus from "./components/CheckAuthStatus";

function App() {
  return (
    <div style={{ margin: "2em" }}>
      <SignUp />
      <SignIn />
      <SignOut />
      <CheckAuthStatus />
    </div>
  );
}

export default App;

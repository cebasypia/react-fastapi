import SignUp from "./components/SignUp";
// import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import CheckAuthStatus from "./components/CheckAuthStatus";
import SignInScreen from "./components/SignInScreen";

function App() {
  return (
    <div style={{ margin: "2em" }}>
      <SignUp />
        <SignInScreen />
        {/* <SignIn /> */}
      <SignOut />
      <CheckAuthStatus />
    </div>
  );
}

export default App;

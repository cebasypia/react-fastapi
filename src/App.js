import AppProvider from "./providers/AppProvider"
import Router from "./routers/router"
import SignUp from "./components/SignUp";
// import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import CheckAuthStatus from "./components/CheckAuthStatus";
import SignInScreen from "./components/SignInScreen";
import UserStatus from "./components/UserStatus";

function App() {
  return (
    <AppProvider>
      <div style={{ margin: "2em" }}>
        <UserStatus />
        <SignUp />
        <SignInScreen />
        {/* <SignIn /> */}
        <SignOut />
        <CheckAuthStatus />
      </div>
    </AppProvider>
  );
}

export default App;

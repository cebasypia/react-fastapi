import SignUp from "./components/SignUp";
// import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import CheckAuthStatus from "./components/CheckAuthStatus";
import SignInScreen from "./components/SignInScreen";
import UserStatus from "./components/UserStatus";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect, createContext } from "react";

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

const AppProvider = (props) => {
  return <UserProvider>{props.children}</UserProvider>;
};

const UserProvider = (props) => {
  const [user, setUser] = useState(getAuth().currentUser);
  useEffect(() => {
    const auth = getAuth();

    // login状態が変更されたら
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const UserContext = createContext({});

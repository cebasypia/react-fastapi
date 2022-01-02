import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect, createContext } from "react";

export const UserContext = createContext({});
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

export default UserProvider;

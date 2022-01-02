import UserProvider from "./UserProvider"

const AppProvider = (props) => {
  return <UserProvider>{props.children}</UserProvider>;
};

export default AppProvider;
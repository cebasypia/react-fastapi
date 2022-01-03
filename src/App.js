import AppProvider from "./providers/AppProvider"
import Router from "./routers/router"

const App = () => {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;

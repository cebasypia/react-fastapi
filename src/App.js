import AppProvider from "./providers/AppProvider"
import Router from "./routers/router"

function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;

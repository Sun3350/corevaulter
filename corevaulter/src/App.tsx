import { AppRouter } from "./router";
import { useAuthStore } from "./stores/auth.store";
import { useEffect } from "react";
import "./App.css";

function App() {
  const { loadUser } = useAuthStore();

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;

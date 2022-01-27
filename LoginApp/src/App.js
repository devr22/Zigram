import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (loginStatus) => {
    if (loginStatus) {
      localStorage.setItem("isLoggedIn", 1);
      setIsLoggedIn(true);
    } else {
      localStorage.setItem("isLoggedIn", 0);
      setIsLoggedIn(false);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <Home onLogout={loginHandler} />
      ) : (
        <Login onLogin={loginHandler} />
      )}
    </div>
  );
}

export default App;

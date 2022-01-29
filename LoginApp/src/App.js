import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "1") {
      setIsLoggedIn(true);
    }
    if (localStorage.getItem("authToken") !== "") {
      setAuthToken(localStorage.getItem("authToken"));
    }
  }, []);

  const loginHandler = (token) => {
    localStorage.setItem("isLoggedIn", 1);
    localStorage.setItem("authToken", token);
    setAuthToken(token);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", 0);
    localStorage.setItem("authToken", "");
    setAuthToken("");
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Home onLogout={logoutHandler} authToken={authToken} />
      ) : (
        <Login onLogin={loginHandler} />
      )}
    </div>
  );
}

export default App;

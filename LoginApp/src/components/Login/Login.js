import React from "react";
import LoginForm from "./LoginForm";
import classes from "./Login.module.css";
import LoginInfo from "./LoginInfo";

const Login = (props) => {
  const loginHandler = (loginStatus) => {
    if (loginStatus) {
      props.onLogin(true);
    }
  };

  return (
    <div className={classes.login}>
      <div className={classes["login-controls"] && classes["login-info"]}>
        <LoginInfo />
      </div>
      <div className={classes["login-controls"]}>
        <LoginForm onLogin={loginHandler} />
      </div>
    </div>
  );
};

export default Login;

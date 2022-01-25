import React from "react";
import logo from "../../logo.svg";
import LoginForm from "./LoginForm";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes.login}>
      <div className={classes["login-info"]}>
        <header className={classes.header}>
          <img src={logo} alt="logo" />
          <h1>Amazing</h1>
        </header>
        <h1 className={classes.message}>
          Welcome to the world of{" "}
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            Internet
          </a>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In possimus
          ea, sed cumque eaque et.
        </p>
      </div>
      <div className={classes["login-controls"]}>
        <p className={classes.home}>Home</p>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;

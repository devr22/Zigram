import React from "react";
import logo from "../../logo.svg";
import classes from "./LoginInfo.module.css";

const LoginInfo = () => {
  return (
    <React.Fragment>
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
      <p className={classes.subMessage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In possimus ea,
        sed cumque eaque et.
      </p>
    </React.Fragment>
  );
};

export default LoginInfo;

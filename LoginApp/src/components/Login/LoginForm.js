import React, { useEffect, useRef, useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./LoginForm.module.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const LoginForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  let percentage = 0;

  const passwordVisibilityHandler = () => {
    isPasswordShown ? setIsPasswordShown(false) : setIsPasswordShown(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (
      enteredEmail.trim().length === 0 ||
      enteredPassword.trim().length === 0
    ) {
      alert("Please enter a valid email and password (non-empty values).");
      return;
    }

    // setShowProgress(true);

    alert("Logged In");
    document.getElementById("loginForm").reset();

    // setTimeout(() => {

    //   showProgress(false);
    // }, 3000);
  };

  return (
    <div className={classes["form-container"]}>
      <form
        id="loginForm"
        className={classes.form}
        onSubmit={formSubmitHandler}
      >
        <h1>Login</h1>
        <Input
          id="email"
          ref={emailInputRef}
          label="Email"
          input={{
            type: "email",
            placeholder: "Enter your email address",
          }}
        />
        <Input
          id="password"
          ref={passwordInputRef}
          label="Password"
          input={{
            type: `${isPasswordShown ? "text" : "password"}`,
            placeholder: "Enter your password",
          }}
        />
        <p
          onClick={passwordVisibilityHandler}
          className={classes.passwordToggle}
        >
          {isPasswordShown ? "Hide Password" : "Show Password"}
        </p>
        <Button attributes={{ type: "submit" }}>Sign In</Button>
        {showProgress && (
          <CircularProgressbar
            className={classes.progress}
            value={percentage}
            text={`${percentage}%`}
          />
        )}
      </form>
    </div>
  );
};

export default LoginForm;

import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./LoginForm.module.css";
// import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useHttp from "../../hooks/use-http";

const LoginForm = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [message, setMessage] = useState(null);
  // const [showProgress, setShowProgress] = useState(false);

  const { isLoading, error, sendRequest: loginRequest } = useHttp();

  // let percentage = 0;

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

    sendLoginRequest(enteredEmail, enteredPassword);
  };

  const loginHandler = (responseData) => {
    console.log(responseData);
    setMessage("Successfuly, Logged In");
    document.getElementById("loginForm").reset();
    setTimeout(() => {
      const authToken = responseData.data.access;
      props.onLogin(authToken);
    }, 1000);
  };

  const sendLoginRequest = async (enteredEmail, enteredPassword) => {
    loginRequest(
      {
        endPoint: "login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${props.authToken}`,
        },
        body: { email: enteredEmail, password: enteredPassword },
      },
      loginHandler
    );
  };

  return (
    <div className={classes["form-container"]}>
      <form id="loginForm" onSubmit={formSubmitHandler}>
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
          className={
            isPasswordShown ? classes.passwordHide : classes.passwordShow
          }
        >
          {isPasswordShown ? "Hide Password" : "Show Password"}
        </p>
        <Button attributes={{ type: "submit" }}>Sign In</Button>
        {isLoading && (
          <p className={classes.progressMessage}>
            Please wait! Checking your credential.
          </p>
        )}
        {error && (
          <p className={classes.progressMessage}>
            {error} Please check your credential.
          </p>
        )}
        {message && <p className={classes.progressMessage}>{message}</p>}
      </form>
    </div>
  );
};

export default LoginForm;

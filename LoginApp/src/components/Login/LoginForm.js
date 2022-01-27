import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./LoginForm.module.css";
// import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const LoginForm = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [message, setMessage] = useState(null);
  // const [loginStatus, setLoginStatus] = useState(false);
  // const [showProgress, setShowProgress] = useState(false);

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

    setMessage(() => "Please wait! Checking your credential.");

    sendLoginRequest(enteredEmail, enteredPassword);
  };

  const sendLoginRequest = async (enteredEmail, enteredPassword) => {
    try {
      const response = await fetch("https://scrapingengine.zigram.tech/login", {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setMessage(null);

      if (!response.ok) {
        throw new Error("Login denied!, Please check your credential.");
      }

      const data = await response.json();

      console.log(data);

      alert("Logged In");

      document.getElementById("loginForm").reset();

      props.onLogin(true);
    } catch (err) {
      const msg = err.message || "Something went wrong1";
      alert(msg);
    }
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
        {/* {showProgress && (
          <CircularProgressbar
            className={classes.progress}
            value={percentage}
            text={`${percentage}%`}
          />
        )} */}
        {message && <p className={classes.progressMessage}>{message}</p>}
      </form>
    </div>
  );
};

export default LoginForm;

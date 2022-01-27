import React from "react";
import classes from "./Home.module.css";

const Home = (props) => {
  const logoutHandler = () => {
    props.onLogout(false);
  };

  return (
    <div className={classes.home}>
      <button type="button" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
};

export default Home;

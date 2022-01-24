import React from "react";

import classes from "./Summary.module.css";

const Summary = (props) => {
  return (
    <div className={classes.info}>
      <div className={classes.balance}>
        <p>Your Balance</p>
        <h1>₹{props.data.balance}</h1>
      </div>
      <div className={classes.income_expense}>
        <div className={classes.income}>
          <p>Income</p>
          <h2>₹{props.data.income}</h2>
        </div>
        <div className={classes.expense}>
          <p>Expense</p>
          <h2>₹{props.data.expense}</h2>
        </div>
      </div>
    </div>
  );
};

export default Summary;

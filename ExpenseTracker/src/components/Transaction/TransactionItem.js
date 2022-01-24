import React from "react";

import classes from "./TransactionItem.module.css";

const TransactionItem = (props) => {
  return (
    <li className={props.transaction.isIncome ? classes.income : classes.expense}>
      {props.transaction.title}
      <span>{props.transaction.isIncome ? '+' : '-'}{props.transaction.amount}</span>
    </li>
  );
};

export default TransactionItem;

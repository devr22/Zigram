import React, { useState } from "react";

import classes from "./TransactionHistory.module.css";
import TransactionItem from "./TransactionItem";

const TransactionHistory = (props) => {
  const data = props.data.transactions.sort((a, b) => b.time - a.time);
  const [isShownAll, setIsShownAll] = useState(false);

  const showAllClickHandler = () => {
    isShownAll ? setIsShownAll(false) : setIsShownAll(true);
  };

  let transactions;
  if (isShownAll) {
    transactions = data;
  } else {
    transactions = data.slice(0, 3);
  }

  const transactionList = transactions.map((item) => (
    <TransactionItem key={item.time} transaction={item} />
  ));

  return (
    <div className={classes.transaction}>
      <div className={classes.transaction_header}>
        <h2>{!isShownAll ? "Recent Transactions" : "All Transactions"}</h2>
        <span onClick={showAllClickHandler}>
          {!isShownAll ? "Show all" : "Show recent"}
        </span>
      </div>
      {transactionList.length > 0 ? transactionList  : <h4 className={classes.message}>No Transactions Found!</h4>}
    </div>
  );
};

export default TransactionHistory;

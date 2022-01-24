import React, { useState } from "react";
import TransactionForm from "../NewTransaction/TransactionForm";
import TransactionHistory from "../Transaction/TransactionHistory";
import classes from "./Home.module.css";
import Summary from "./Summary";

const DATA = {
  transactions: [],
  balance: 0,
  income: 0,
  expense: 0,
};

const updateData = (prevData, newTransaction) => {
  const updatedBalance = newTransaction.isIncome
    ? prevData.balance + newTransaction.amount
    : prevData.balance - newTransaction.amount;

  let updatedIncome = prevData.income;
  let updatedExpense = prevData.expense;

  if (newTransaction.isIncome) {
    updatedIncome += newTransaction.amount;
  } else {
    updatedExpense += newTransaction.amount;
  }

  return {
    transactions: [newTransaction, ...prevData.transactions],
    balance: updatedBalance,
    income: updatedIncome,
    expense: updatedExpense,
  };
};

const Home = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [transactionData, setTransactionData] = useState(DATA);

  const newTransactionHandler = () => {
    isAdding ? setIsAdding(false) : setIsAdding(true);
  };

  const addTransactionHandler = (newTransaction) => {
    setTransactionData((prevData) => {
      return updateData(prevData, newTransaction);
    });
    setIsAdding(false);
  };

  return (
    <div className={classes.home}>
      <h1>Welcome to your Expense Tracker</h1>
      <Summary data={transactionData} />
      <button
        className={classes.transaction_btn}
        type="button"
        onClick={newTransactionHandler}
      >
        {!isAdding ? "New Transaction" : "Cancel Transaction"}
      </button>
      {isAdding && (
        <TransactionForm
          curBalance={transactionData.balance}
          onAddTransaction={addTransactionHandler}
        />
      )}
      <TransactionHistory data={transactionData} />
    </div>
  );
};

export default Home;

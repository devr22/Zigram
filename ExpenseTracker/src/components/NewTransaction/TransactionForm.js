import React, { useRef } from "react";
import { useState } from "react/cjs/react.development";
import Button from "../UI/Button";
import Input from "../UI/Input";
import TransactionError from "./TransactionError";
import classes from "./TransactionForm.module.css";

const TransactionForm = (props) => {
  const titleInputRef = useRef();
  const amountInputRef = useRef();
  const typeSelectRef = useRef();
  const [error, setError] = useState();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const title = titleInputRef.current.value;
    const amount = amountInputRef.current.value;
    let isIncomeType;
    if (typeSelectRef.current.value === "income") {
      isIncomeType = true;
    } else {
      isIncomeType = false;
    }

    if (title.trim().length === 0 || amount.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+amount <= 0) {
      setError({
        title: "Invalid Amount",
        message: "Please enter a valid amount (> 0).",
      });
      return;
    }

    if (!isIncomeType && +amount > props.curBalance) {
      setError({
        title: "Insufficient Balance",
        message: `You can expend the maximum amount of ₹${props.curBalance}`,
      });
      return;
    }

    const transaction = {
      title: title,
      amount: +amount,
      isIncome: isIncomeType,
      time: Date.now(),
    };

    props.onAddTransaction(transaction);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && <TransactionError error={error} onConfirm={errorHandler} />}
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <div className={classes.expense}>
          <div className={classes.expenseType}>
            <label>Type</label>
            <select ref={typeSelectRef}>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
        </div>
        <Input
          ref={titleInputRef}
          label="Title"
          input={{
            id: "title",
            type: "text",
            placeholder: "Enter the title",
          }}
        />
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount",
            type: "number",
            placeholder: "Enter the Amount",
          }}
        />
        <Button
          name="Add Transaction"
          attribute={{
            type: "submit",
          }}
        />
      </form>
    </React.Fragment>
  );
};

export default TransactionForm;

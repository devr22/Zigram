import React from "react";
import Modal from "../UI/Modal";
import classes from "./TransactionError.module.css";

const TransactionError = (props) => {
  return (
    <Modal onBackdropClick={props.onConfirm}>
      <header className={classes.header}>
        <h2>{props.error.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.error.message}</p>
      </div>
      <footer className={classes.footer}>
        <button onClick={props.onConfirm}>Ok</button>
      </footer>
    </Modal>
  );
};

export default TransactionError;

import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const MOdalOvelay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClose} />, document.getElementById("overlays"))}
      {ReactDOM.createPortal(
        <MOdalOvelay>{props.children}</MOdalOvelay>,
        document.getElementById("overlays")
      )}
    </React.Fragment>
  );
};

export default Modal;

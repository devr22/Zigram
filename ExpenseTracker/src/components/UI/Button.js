import classes from "./Button.module.css";

const Button = (props) => {
  return <button className={classes.button} {...props.atrribute}>{props.name}</button>;
};

export default Button;

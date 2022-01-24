import classes from "./Card.module.css";

const Card = (props) => {
  const classNames = `${classes.card} ${props.className}`;
  return <div className={classNames}></div>;
};

export default Card;

import classes from "./TableItem.module.css";

const TableItem = (props) => {
  return (
    <li className={classes.liItem}>
      <p>
        <b>Id: </b>
        {props.item.source_id}
      </p>
      <p>
        <b>Name: </b>
        {props.item.name}
      </p>
      <p>
        <b>State Name: </b>
        {props.item.state_name}
      </p>
      <p>
        <b>Link: </b>
        {props.item.link}
      </p>
    </li>
  );
};

export default TableItem;

import React, { useState } from "react";

import "../styles.css";

const ToDoItem = (props) => {
  const [isDone, setIsDone] = useState(false);

  const doTaskHandler = () => {
    setIsDone(true);
  };

  const deleteTaskHandler = (event) => {
    props.onDeleteTask(event.target.value);
  };

  return (
    <li>
      {props.task}
      <div>
        <button className={`btn_done ${isDone && 'complete'}`} onClick={doTaskHandler}>
          {isDone ? "Done" : "Do Your Task"}
        </button>
        <button className="btn_delete" value={props.task} onClick={deleteTaskHandler}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;

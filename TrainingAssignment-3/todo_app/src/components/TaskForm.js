import React, { useState } from "react";

import "../styles.css";

const TaskForm = (props) => {
  const [task, setTask] = useState("");
  const [isValid, setIsValid] = useState(true);

  const taskChangedHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setTask(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (task.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onSaveTask(task);
    setTask("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`formContainer ${!isValid && "invalid"}`}>
        <p>
          <b>Task</b>
          <br />
          <input
            type="text"
            value={task}
            placeholder="Enter the task"
            onChange={taskChangedHandler}
          />
        </p>
        <button className="btn_form" type="submit">
          Add ToDo
        </button>
      </div>
    </form>
  );
};

export default TaskForm;

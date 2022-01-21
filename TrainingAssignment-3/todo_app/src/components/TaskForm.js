import React, { useState } from "react";

import "../styles.css";

const TaskForm = (props) => {
  const prevValueForTask = props.prevValue;
  const [task, setTask] = useState(props.prevValue);
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

    props.forEditingTask
      ? props.onUpdateTask(prevValueForTask, task)
      : props.onSaveTask(task);

    // console.log(task);
    // setTask("");
    // console.log(task);
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
          {props.forEditingTask ? "Update" : "Add ToDo"}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;

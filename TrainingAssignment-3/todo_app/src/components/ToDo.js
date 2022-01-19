import React, { useState } from "react";

import "../styles.css";
import TaskForm from "./TaskForm";
import ToDoItem from "./ToDoItem";

const ToDO = (props) => {
  const [isEditing, setIsEditing] = useState(false);
//   const [isDone, setIsDone] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const btnClickHandler = () => {
    isEditing ? stopEditingHandler() : startEditingHandler();
  };

  const saveTaskHandler = (task) => {
    props.onAddTask(task);
    setIsEditing(false);
  };

//   const deleteTaskHandler = (event) => {
//     props.onDeleteTask(event.target.value);
//   };

  const deleteTaskHandler = (task) => {
    props.onDeleteTask(task);
  };

//   const doTaskHandler = () => {
//     setIsDone(true);
//   };

  return (
    <div className="main">
      <h1 className="heading">Welcome to your ToDO List</h1>
      <button className="btn" onClick={btnClickHandler}>
        {!isEditing ? "Add Task" : "Close Form"}
      </button>
      {isEditing && <TaskForm onSaveTask={saveTaskHandler} />}
      <div className="listContainer">
        <ul>
          {props.tasks.map((task) => (
            // <li>
            //   {task}
            //   <div>
            //     <button className="btn_done" onClick={doTaskHandler}>
            //       {isDone ? "Done" : "Do Your Task"}
            //     </button>
            //     <button
            //       className="btn_delete"
            //       value={task}
            //       onClick={deleteTaskHandler}
            //     >
            //       Delete
            //     </button>
            //   </div>
            // </li>

            <ToDoItem task={task} onDeleteTask={deleteTaskHandler} />

          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDO;

import React, { useState } from "react";

import "../styles.css";
import TaskForm from "./TaskForm";
import ToDoItem from "./ToDoItem";

const ToDO = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [initialTask, setInitialTask] = useState("");
  const [forEditingTask, setForEditingTask] = useState(false);

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
    setInitialTask("");
  };

  const deleteTaskHandler = (task) => {
    props.onDeleteTask(task);
  };

  const editTaskHandler = (prevValue) => {
    setInitialTask(prevValue);
    setForEditingTask(true);
    startEditingHandler();
  };

  const updateTaskHandler = (oldTask, newTask) => {
    props.onUpdateTask(oldTask, newTask);
    setForEditingTask(false);
    setIsEditing(false);
    setInitialTask("");
  };

  return (
    <div className="main">
      <h1 className="heading">Welcome to your ToDO List</h1>
      <button className="btn" onClick={btnClickHandler}>
        {!isEditing ? "Add Task" : "Close Form"}
      </button>
      {isEditing && (
        <TaskForm
          onSaveTask={saveTaskHandler}
          prevValue={initialTask}
          forEditingTask={forEditingTask}
          onUpdateTask={updateTaskHandler}
        />
      )}
      <div className="listContainer">
        <ul>
          {props.tasks.map((task) => (
            <ToDoItem
              key={Math.random().toString()}
              task={task}
              onDeleteTask={deleteTaskHandler}
              onEditTask={editTaskHandler}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDO;

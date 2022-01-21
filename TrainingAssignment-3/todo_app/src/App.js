import { useState } from "react";
import "./App.css";
import ToDo from "./components/ToDo";

const DUMMY_TASKS = ["HTML", "Java"];

const App = () => {
  const [tasks, setTasks] = useState(DUMMY_TASKS);

  const addTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  const deleteTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((item) => item !== task);
    });
  };

  const updateTaskHandler = (oldTask, newTask) => {
    setTasks(() => {
      let index = tasks.indexOf(oldTask);
      tasks[index] = newTask;
      return tasks;
    });
  };

  return (
    <div>
      <ToDo
        tasks={tasks}
        onAddTask={addTaskHandler}
        onDeleteTask={deleteTaskHandler}
        onUpdateTask={updateTaskHandler}
      />
    </div>
  );
};

export default App;

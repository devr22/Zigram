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

  return (
    <div>
      <ToDo
        tasks={tasks}
        onAddTask={addTaskHandler}
        onDeleteTask={deleteTaskHandler}
      />
    </div>
  );
};

export default App;

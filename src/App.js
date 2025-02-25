import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="app">
      <h1>Today App</h1>
      <p>{currentTime.toLocaleDateString()} - {currentTime.toLocaleTimeString()}</p>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;

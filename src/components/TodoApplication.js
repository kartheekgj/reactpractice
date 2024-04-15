import React, { useState } from "react";
import TodoAppReducer from "./TodoApplicationReducer";
function ToDoComponent() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleAddTask = (event) => {
    event.preventDefault();
    setTasks([...tasks, taskName]);
    setTaskName("");
  };
  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks([...updatedTasks]);
  };

  const handleEditTask = (index) => {};

  return (
    <div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border-2 border-green-500 h-screen pt-8 bg-gray-100 space-y-6">
        <input
          name={taskName}
          value={taskName}
          className="py-1.5 pl-2 pr-20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button className="pl-2" onClick={() => handleEditTask(index)}>
                Edit
              </button>
              <button className="pl-2" onClick={() => handleDeleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default function TodoApp() {
  return (
    <div>
      <ToDoComponent />
      <TodoAppReducer />
    </div>
  );
}

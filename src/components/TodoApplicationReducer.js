import React, { useReducer } from "react";

function ToDoComponent() {
  const initialState = {
    taskName: "",
    tasks: [],
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    dispatch({ type: "HANDLE_INPUT_CHANGE", data: event.target.value });
  };
  const handleAddTask = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_TASK", data: state.newTask });
  };
  const handleDeleteTask = (index) => {
    dispatch({ type: "DELETE_TASK", data: index });
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "HANDLE_INPUT_CHANGE":
        return {
          ...state,
          newTask: action.data,
        };
      case "ADD_TASK":
        return {
          ...state,
          tasks: [...state.tasks, action.data],
          newTask: "",
        };
      case "DELETE_TASK":
        const updatedTasks = [...state.tasks];
        updatedTasks.splice(action.data, 1);
        return {
          ...state,
          tasks: [...updatedTasks],
          newTask: "",
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border-2 border-green-500 h-screen pt-8 bg-gray-100 space-y-6">
      <h3>Using Reducer</h3>
      <input
        name={state.newTask}
        value={state.newTask}
        className="py-1.5 pl-2 pr-20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>Add</button>
      <ol>
        {state.tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button className="pl-2" onClick={() => handleDeleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function TodoAppReducer() {
  return (
    <div>
      <ToDoComponent />
    </div>
  );
}

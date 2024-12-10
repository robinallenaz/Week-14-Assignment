import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ItemList from './ItemList';

function App() {
  // State for managing tasks
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Read a book', completed: true },
    { id: 3, title: 'Write code', completed: false },
  ]);

  // Add a new task
  const addTask = (title) => {
    const newTask = { id: tasks.length + 1, title, completed: false };
    setTasks([...tasks, newTask]);
  };

  // Edit an existing task
  const editTask = (id, newTitle) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, title: newTitle } : task));
  };

  // Remove a task
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <Sidebar />
      {/* Pass task management functions to ItemList */}
      <ItemList tasks={tasks} addTask={addTask} editTask={editTask} removeTask={removeTask} />
    </div>
  );
}

export default App;

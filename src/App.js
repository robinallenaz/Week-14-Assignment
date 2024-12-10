import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ItemList from './ItemList';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Read a book', completed: true },
    { id: 3, title: 'Write code', completed: false },
  ]);

  const addTask = (title) => {
    const newTask = { id: tasks.length + 1, title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id, newTitle) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, title: newTitle } : task));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <Sidebar />
      <ItemList tasks={tasks} addTask={addTask} editTask={editTask} removeTask={removeTask} />
    </div>
  );
}

export default App;

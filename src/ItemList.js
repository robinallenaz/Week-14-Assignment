import React, { useState } from 'react';
import ItemCard from './ItemCard';

function ItemList({ tasks, addTask, editTask, removeTask }) {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      addTask(newTaskTitle);
      setNewTaskTitle('');
    }
  };

  return (
    <div className="item-list">
      <input
        type="text"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      {tasks.map(task => (
        <ItemCard key={task.id} task={task} editTask={editTask} removeTask={removeTask} />
      ))}
    </div>
  );
}

export default ItemList;

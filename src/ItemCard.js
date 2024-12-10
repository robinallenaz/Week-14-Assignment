import React, { useState } from 'react';

function ItemCard({ task, editTask, removeTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [isCompleted, setIsCompleted] = useState(task.completed);
  const [isShrinking, setIsShrinking] = useState(false);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, editedTitle);
    }
    setIsEditing(!isEditing);
  };

  const handleCheckboxChange = () => {
    if (!isCompleted) {
      setIsCompleted(true);
      setIsShrinking(true);
      setTimeout(() => {
        removeTask(task.id);
      }, 2000);
    }
  };

  return (
    <div className={`item-card ${isShrinking ? 'shrink-fade' : ''}`}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={handleCheckboxChange}
      />
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
      ) : (
        <h3>{task.title}</h3>
      )}
      <p>{task.completed ? 'Completed' : 'Pending'}</p>
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={() => removeTask(task.id)}>Remove</button>
    </div>
  );
}

export default ItemCard;

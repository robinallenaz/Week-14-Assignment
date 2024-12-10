import React, { useState } from 'react';

function ItemCard({ task, editTask, removeTask }) {
  // State for editing mode
  const [isEditing, setIsEditing] = useState(false);
  // State for the task title being edited
  const [editedTitle, setEditedTitle] = useState(task.title);
  // State to track task completion
  const [isCompleted, setIsCompleted] = useState(task.completed);
  // State to trigger shrink and fade animation
  const [isShrinking, setIsShrinking] = useState(false);

  // Toggle editing mode and save changes
  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, editedTitle);
    }
    setIsEditing(!isEditing);
  };

  // Handle task completion and initiate removal
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
      {/* Checkbox to mark task as completed */}
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={handleCheckboxChange}
      />
      {isEditing ? (
        // Input for editing task title
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

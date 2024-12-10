import React, { useState } from 'react';

function ItemCard({ task, editTask, removeTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, editedTitle);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="item-card">
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

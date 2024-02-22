import React from "react";

function Task({ task, onDelete }) {
  const handleDelete = () => {
    onDelete(task.text);
  };

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={handleDelete} className="delete-button">
        X
      </button>
    </div>
  );
}

export default Task;

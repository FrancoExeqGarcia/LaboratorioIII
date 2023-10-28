import React from 'react';

function TaskForm({ newTaskText, setNewTaskText, addTask }) {
  const handleAddTask = () => {
    addTask(newTaskText);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />
      <button onClick={handleAddTask}>Agregar</button>
    </div>
  );
}

export default TaskForm;

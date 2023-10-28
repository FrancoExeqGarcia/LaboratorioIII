import React from 'react';

function TaskList({ tasks, setTasks, firstTimeUser }) {
  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      {firstTimeUser && tasks.length === 0 ? (
        <p>¡Bienvenido! Esta es la primera vez que usas la aplicación. Tu lista de tareas está vacía.</p>
      ) : tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(index)}
              />
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </span>
              <button onClick={() => deleteTask(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>¡La lista de tareas está vacía!</p>
      )}
    </div>
  );
}

export default TaskList;

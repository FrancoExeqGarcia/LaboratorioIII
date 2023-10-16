import "./App.css";
import React, { useState } from 'react';
import Table from './ejercicio2/Table'; 
import Login from './ejercicio3/Login';
import TaskList from './ejercicio4/TaskList';
import TaskForm from './ejercicio4/TaskForm';
const netIncomes = [
  { brand: 'McDonalds', income: 1291283 },
  { brand: 'Burger King', income: 1927361 },
  { brand: 'KFC', income: 1098463 },
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  const addTask = (text) => {
    if (text.trim() !== '') {
      const newTask = {
        text,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
  };
  return (

    <div className="App">
      <h1>Ejercicio 2</h1>
      <h2>Tabla de Ingresos</h2>
      <Table netIncomes={netIncomes} />
      
      <h1>Ejercicio 3 </h1>
      <Login />

      <h1>Ejercicio 4 usando Login de ejercicio3</h1>
      {isLoggedIn ? (
        <div>
          <button onClick={handleLogout}>Cerrar sesión</button>
          <h2>Lista de Tareas</h2>
          <TaskList tasks={tasks} setTasks={setTasks} />
          <TaskForm newTaskText={newTaskText} setNewTaskText={setNewTaskText} addTask={addTask} />
        </div>
      ) : (
        <div>
          <Login />
          <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
      )}
    </div>
  );
}

export default App;
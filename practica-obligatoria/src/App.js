import "./App.css";
import React, { useState, useEffect } from 'react';
import Table from './components/ejercicio2/Table'; 
import Login from './components/ejercicio3/Login';
import TaskList from './components/ejercicio4/TaskList';
import TaskForm from './components/ejercicio4/TaskForm';
const netIncomes = [
  { brand: 'McDonalds', income: 1291283 },
  { brand: 'Burger King', income: 1927361 },
  { brand: 'KFC', income: 1098463 },
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');
  const [firstTimeUser, setFirstTimeUser] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('hasUsedApp')) {
      setFirstTimeUser(false);
    } else {
      localStorage.setItem('hasUsedApp', 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

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
      setNewTaskText('');
    }
  };

  return (

    <div className="App">
      <h1>Ejercicio 2</h1>
      <h2>Tabla de Ingresos</h2>
      <Table netIncomes={netIncomes} />
      
      <h1>Ejercicio 3 </h1>
      <Login />
      <h1>Ejercicio 4 usando Login de ejercicio 3</h1>
      {isLoggedIn ? (
        <div>
          <button onClick={handleLogout}>Cerrar sesión</button>
          <h2>Lista de Tareas</h2>
          <TaskList tasks={tasks} setTasks={setTasks} firstTimeUser={firstTimeUser} />
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
import "./App.css";
import React from 'react';
import Table from './ejercicio2/Table'; 
import Tarea from './ejercicio3/Tarea';
const netIncomes = [
  { brand: 'McDonalds', income: 1291283 },
  { brand: 'Burger King', income: 1927361 },
  { brand: 'KFC', income: 1098463 },
];

function App() {
  return (
    <div className="App">
      <h1>Ejercicio 2</h1>
      <h2>Tabla de Ingresos</h2>
      <Table netIncomes={netIncomes} />
      <Tarea />
    </div>
  );
}

export default App;
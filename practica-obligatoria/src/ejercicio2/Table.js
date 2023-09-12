import React from 'react';

const Table = ({ netIncomes }) => {
  const averageIncome = netIncomes.reduce((total, incomeObj) => {
    return total + incomeObj.income;
  }, 0) / netIncomes.length;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Ingreso Neto</th>
          </tr>
        </thead>
        <tbody>
          {netIncomes.map((incomeObj, index) => (
            <tr key={index}>
              <td>{incomeObj.brand}</td>
              <td>{incomeObj.income}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Promedio de Ingreso Neto: {averageIncome}</p>
    </div>
  );
};

export default Table;

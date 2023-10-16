import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleUsernameChange = (event) => {
    const newUsername = event.target.value;
    if (newUsername.toLowerCase().includes('o')) {
      setMessage('Por favor, ¡Nombres de usuario sin la letra o!');
    } else {
      setMessage('');
    }
    setUsername(newUsername);
  };

  const handleRegisterClick = () => {
    if (username === '' || username.toLowerCase().includes('o')) {
      setMessage('Usuario inválido para registrarse');
    } else {
      setMessage('¡Usuario registrado correctamente!');
    }
  };

  return (
    <div>
      <h1>Ejercicio 3 </h1>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={handleUsernameChange}
      />
      <button onClick={handleRegisterClick}>Registrarse</button>
      <p>{username}</p>
      <p>{message}</p>
    </div>
  );
}

export default Login;

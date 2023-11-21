import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Regiter';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    
    const storedEmail = localStorage.getItem('registeredEmail');
    const storedPassword = localStorage.getItem('registeredPassword');

    // Check if entered credentials match the stored values
    if (username === storedEmail && password === storedPassword) {
      console.log('Login successful!');
      // Add additional logic for successful login, e.g., redirect to a dashboard
    } else {
      console.error('Login failed. Invalid credentials.');
      // Add logic for unsuccessful login, e.g., show an error message
    }
    
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-5">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="email"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

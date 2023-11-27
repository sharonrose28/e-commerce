import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  console.log(localStorage.getItem('registeredEmail'));
  console.log(localStorage.getItem('registeredPassword'));

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('email:', email);
    console.log('Password:', password);

    // Store the input values in local storage
    localStorage.setItem('registeredEmail', email);
    localStorage.setItem('registeredPassword', password);




    // Add your authentication logic here
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-5">
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

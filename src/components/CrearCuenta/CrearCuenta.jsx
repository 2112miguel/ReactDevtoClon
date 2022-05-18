import React from 'react';
import './CrearCuenta.scss';
import { BotonesAccount } from '../BotonesAccount/BotonesAccount';
import { InputLogin } from '../InputLogin/InputLogin';
import { BotonesCrearCuenta } from '../BotonesCrearCuenta/BotonesCrearCuenta';
import { Link } from 'react-router-dom';

export const CrearCuenta = ({ children }) => {
  const [user, setUser] = React.useState(null);

  const handleAccount = (e) => {
    e.preventDefault();

    const createAccount = fetch('https://devtoclon.herokuapp.com/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(createAccount);

    createAccount
      .then((res) => res.json())
      .then((body) => {
        console.log(body);
      });
    console.log(user);
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <div className="Login-content">
          <p id="CreateATitle">Welcome to DEv community </p>
          <p>
            {' '}
            <Link to="/"> DEV Community</Link> is a community of 846,223 amazing
            developers{' '}
          </p>
          <br />
          <BotonesAccount />
          <p className="passwordtext">
            Have a password? Continue with your email adress
          </p>
          <label>Email</label>
          <input
            type="text"
            id="Email"
            onChange={({ target }) => {
              setUser({
                ...user,
                email: target.value,
              });
            }}
          />

          <label>Password</label>
          <input
            type="password"
            id="Password"
            onChange={({ target }) => {
              setUser({
                ...user,
                password: target.value,
              });
            }}
          />
          <button onClick={handleAccount} className="ContinnueLogin"> Create Account </button>
        </div>
      </div>
    </div>
  );
};

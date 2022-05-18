import React from 'react';
import './Log.scss';
import { BotonesAccount } from '../BotonesAccount/BotonesAccount';
import { InputLogin } from '../InputLogin/InputLogin';
import { BotonesCrearCuenta } from '../BotonesCrearCuenta/BotonesCrearCuenta';
import { Link } from 'react-router-dom';

export const Log = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loaing, setLoading] = React.useState(true);

  const handleUser = (e) => {
    e.preventDefault();
    const userlogin = fetch('https://devtoclon.herokuapp.com/auth/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    userlogin
      .then((res) => res.json())
      .then((body) => {
        localStorage.setItem(body.id, body.payload);
        console.log(localStorage.getItem(body.id));
      });

    console.log(user);
    console.log(userlogin);
  };

  React.useEffect(() => {});

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

          <input type="checkbox" />
          <label>&nbsp;Remember me</label>

          <button onClick={handleUser}>Continue</button>
          <p className="passwordtext">I forgot my password</p>
        </div>
      </div>
    </div>
  );
};

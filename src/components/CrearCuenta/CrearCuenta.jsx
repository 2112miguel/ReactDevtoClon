import React from 'react';
import './CrearCuenta.scss';
import { BotonesAccount } from '../BotonesAccount/BotonesAccount';
import { InputLogin } from '../InputLogin/InputLogin';
import { BotonesCrearCuenta } from '../BotonesCrearCuenta/BotonesCrearCuenta';
import { Link } from 'react-router-dom';

export const CrearCuenta = ({ children }) => {
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
          <input type="text" id="Email" />
          <label>Password</label>
          <input type="password" id="Password" />
        </div>
      </div>
    </div>
  );
};

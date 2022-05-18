import React from 'react';
import './Log.scss';
import { BotonesAccount } from '../BotonesAccount/BotonesAccount';
import { InputLogin } from '../InputLogin/InputLogin';
import { CreateAccountButton } from '../CreateAccountButton/CreateAccountButton';
import { Link } from 'react-router-dom';

export const Log = ({ children }) => {
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
          <InputLogin type="text" labels="Email" />
          <InputLogin type="password" labels="Password" />
          <input type="checkbox" />
          <label>&nbsp;Remember me</label>
          <CreateAccountButton id="continue" texto="Continue" />
          <p className="passwordtext">I forgot my password</p>
        </div>
      </div>
    </div>
  );
};

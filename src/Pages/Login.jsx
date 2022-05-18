import React from 'react';
import { Log } from '../components/Log/Log';
import { CreateAccountButton } from '../components/CreateAccountButton/CreateAccountButton';
export const Login = () => {
  return (
    <div>
      <Log>
        <CreateAccountButton texto="Sign up with Apple" />
      </Log>
    </div>
  );
};

{
  /** 
  <CreateAccountButton texto="Sign up with Apple" />
  <CreateAccountButton texto="Sign up with Forem" />
  <CreateAccountButton texto="Sign up with Github" />
  <CreateAccountButton texto="Sign up with Twitter" />
*/
}

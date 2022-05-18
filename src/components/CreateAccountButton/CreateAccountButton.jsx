import React from 'react';
import './CreateAccountButton.scss';

export const CreateAccountButton = ({ id, icon, texto }) => {
  return (
    <button id={id} className="CreateAccountButton">
      {icon}&nbsp;&nbsp;&nbsp;
      {texto}
    </button>
  );
};

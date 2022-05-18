import React from 'react';
import './CreateAccountButton.scss';

export const CreateAccountButton = ({ id, icon, texto }) => {
  return (
    <button id={id} className="CreateAccountBtn">
      {icon}&nbsp;&nbsp;&nbsp;
      {texto}
    </button>
  );
};

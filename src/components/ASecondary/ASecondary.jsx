import React from 'react';
import './ASecondary.scss';

export const ASecondary = ({ text, img }) => {
  return (
    <div className="ASecondary">
      <div className="ASecondary-container">
        {text}
        <img src={img} alt="" width ="100%X"/>
      </div>
    </div>
  );
};

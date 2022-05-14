import React from "react";
import "./AComponent.scss";

export const AComponent = ({ text }) => {
  return (
    <div className="buttonHover">
      <a href="" className="AComponent rounded text-decoration-none  text-dark">
        {text}
      </a>
    </div>
  );
};

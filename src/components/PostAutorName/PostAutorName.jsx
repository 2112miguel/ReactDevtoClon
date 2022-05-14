import React from "react";
import "./PostAutorName.scss";

export const PostAutorName = ({ text }) => {
  return (
    <button type="button" class="PostAutorName">
      {text}
    </button>
  );
};

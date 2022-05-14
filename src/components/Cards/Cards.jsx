import React from "react";

export const Cards = ({ children }) => {
  return (
    <section className="d-flex align-items-center flex-column w-50 bg-white p-3">
      {children}
    </section>
  );
};

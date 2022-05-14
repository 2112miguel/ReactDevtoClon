import React, { createContext, useState } from "react";

export const AppContext = createContext();

const ArrayOne = {
  loadPage: [
    {
      text: "Home",
    },
    {
      text: "Listings",
    },
    {
      text: "Podcast",
    },
    {
      text: "Videos",
    },
    {
      text: "Tags",
    },
    {
      text: "FAQ",
    },
    {
      text: "Forem Shop",
    },
    {
      text: "Sponsors",
    },
    {
      text: "About",
    },
    {
      text: "Contact",
    },
  ],
};

export const AppProvider = ({ children }) => {
  const [state, setState] = useState(ArrayOne);

  return (
    <AppContext.Provider value={{ state }}>{children}</AppContext.Provider>
  );
};

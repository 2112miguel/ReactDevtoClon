import React, { createContext, useState } from "react";

export const AppContext = createContext();

const ArrayOne = {
  loadPage: [
    {
      text: "Home",
      icon: `bi bi-house-door mx-2`,
    },
    {
      text: "Listings",
      icon: `bi bi-newspaper mx-2`,
    },
    {
      text: "Podcast",
      icon: `bi bi-mic-fill mx-2`,
    },
    {
      text: "Videos",
      icon: `bi bi-camera-reels-fill mx-2`,
    },
    {
      text: "Tags",
      icon: `bi bi-tags mx-2`,
    },
    {
      text: "FAQ",
      icon: `bi bi-lightbulb-fill mx-2`,
    },
    {
      text: "Forem Shop",
      icon: `bi bi-bag-fill mx-2`,
    },
    {
      text: "Sponsors",
      icon: `bi bi-heart-fill mx-2`,
    },
    {
      text: "About",
      icon: `bi bi-card-list mx-2 textHover`,
    },
    {
      text: "Contact",
      icon: `bi bi-telephone-fill mx-2 textHover`,
    },
  ],
  other: [
    {
      text: "Code of Conduct",
      icon: "bi bi-hand-thumbs-up-fill",
    },
    {
      text: "Privacy Policy",
      icon: "bi bi-emoji-sunglasses",
    },
    {
      text: "Code of Conduct",
      icon: "bi bi-eyeglasses",
    },
  ],
  socialNetworkIcons: [
    {
      text: "",
      icon: "bi bi-twitter h4 textHover p-2",
    },
    {
      text: "",
      icon: "bi bi-facebook p-2",
    },
    {
      text: "",
      icon: "bi bi-github p-2",
    },
    {
      text: "",
      icon: "bi bi-instagram p-2",
    },
    {
      text: "",
      icon: "bi bi-twitch p-2",
    },
  ],
};

export const AppProvider = ({ children }) => {
  const [state, setState] = useState(ArrayOne);

  return (
    <AppContext.Provider value={{ state }}>{children}</AppContext.Provider>
  );
};

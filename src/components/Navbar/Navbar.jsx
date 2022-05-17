import React from "react";
import { ButtonLogin } from "../ButtonLogIn/ButtonLogin";
import { IconDev } from "../IconDev/IconDev";
import { InputSearch } from "../InputSearch/InputSearch";
import { SearchIcon } from "../SearchIcon/SearchIcon";
import { CreateAccountButton } from "../CreateAccountButton/CreateAccountButton";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <section className="d-flex p-2 my-2 mx-2 justify-content-around bg-white sticky-top">
      <article className="d-flex">
        <IconDev />
        <div class="wrap">
          <div className="search">
            <InputSearch />
            <SearchIcon />
          </div>
        </div>
      </article>
      <article>
        <ButtonLogin />
        <CreateAccountButton />
      </article>
    </section>
  );
};

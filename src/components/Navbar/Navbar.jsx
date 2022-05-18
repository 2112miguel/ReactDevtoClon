import React from "react";
import { ButtonLogin } from "../ButtonLogIn/ButtonLogin";
import { IconDev } from "../IconDev/IconDev";
import { InputSearch } from "../InputSearch/InputSearch";
import { SearchIcon } from "../SearchIcon/SearchIcon";
import { CreateAccountButton } from "../CreateAccountButton/CreateAccountButton";
import { AppContext } from "../../Context/AppContext";
import "./Navbar.scss";

export const Navbar = () => {
  const Context = React.useContext(AppContext);
  console.log(Context);
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
        {Context.user.userID === "" ? (
          <ButtonLogin />
        ) : (
          <i class="bi bi-bell fs-3 mx-2"></i>
        )}
        {Context.user.userID === "" ? (
          <CreateAccountButton />
        ) : (
          <i class="bi bi-person-circle fs-3"></i>
        )}
      </article>
    </section>
  );
};

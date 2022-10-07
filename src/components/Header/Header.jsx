import React from "react";
import Menu from "../Menu/Menu";
import classes from "./Header.module.css";

const Header = ({ menuTitle, menuItems }) => {

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <button className={classes.nav__btn}></button>
      </nav>
      <Menu menuTitle={menuTitle} menuItems={menuItems} />
    </header>
  );
}

export default Header;
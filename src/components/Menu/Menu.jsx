import React from "react";
import classes from "./Menu.module.css";

const Menu = ({ menuTitle, menuItems }) => {

  return (
    <div className={classes.menu}>
      <div className={classes.menu__content}>
        <h2 className={classes.menu__header}>{menuTitle}</h2>
        <ul className={classes.munu__list}>
          {menuItems.map(item =>
            <li>{item.title}</li> 
          )}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
import React from "react";
import classes from "./Menu.module.scss";
 import { Link } from "react-router-dom";


const MenuWork= () => {
  return (
    <>
      <menu className={classes.menu}>
        <div className={classes.menu__nav}>
          <ul>
            <li id="contactLink">
              <Link
                to="/#work"
                activeClass={classes.menu__nav__active}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
               work list
              </Link>
            </li>
       
          </ul>
        </div>
      </menu>
    </>
  );
};

export default MenuWork;

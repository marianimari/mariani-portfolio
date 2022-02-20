import React from "react";
import classes from "./Menu.module.scss";
import { Link } from "react-scroll";


const MenuAbout = () => {
  return (
    <>
      <menu className={classes.menu}>
        <div className={classes.menu__nav}>
          <ul>
            <li id="contactLink">
              <Link
                to="contact"
                activeClass={classes.menu__nav__active}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                contact
              </Link>
            </li>
       
          </ul>
        </div>
      </menu>
    </>
  );
};

export default MenuAbout;

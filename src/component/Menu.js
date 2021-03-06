import React from "react";
import classes from "./Menu.module.scss";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

// const scrollToTop = () => {
//   scroll.scrollToTop();
// };
const Menu = () => {
  return (
    <>
      <menu className={classes.menu}>
        <div className={classes.menu__nav}>
          <ul>
            <li id="contactLink">
              <Link
                to="contact"
                activeClass={classes.active}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                contact
              </Link>
            </li>
            <li  id="experimentLink">
              <Link
                to="experiment"
                activeClass={classes.active}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                experiment
              </Link>
            </li>
            <li  id="workLink">
              <Link
                to="work"
                activeClass={classes.active}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                works
              </Link>
            </li>
            <li id="welcomeLink">
              <Link
                to="welcome"
                activeClass={classes.active}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Mariani
              </Link>
            </li>
          </ul>
        </div>
      </menu>
    </>
  );
};

export default Menu;

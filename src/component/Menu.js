import React from "react";
import classes from "./Menu.module.scss";
// import { Link } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";


const scrollToTop = () => {
  scroll.scrollToTop(); 
};
const Menu = () => {
  return (
<>
<menu className={classes.menu}>
<div className={classes.menu__nav} >
   <ul >
       <li>
       <Link to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
       >contact</Link>
       </li>
       <li>
       <Link to="experiment"
          activeClass="act"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
       
       >experiment</Link>
       </li>
       <li >
       <Link to="work" 
          activeClass={classes.menu__nav__active} 
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          >works</Link>
       </li>
       <li>
       <Link to="welcome"
         activeClass="act"
         spy={true}
         smooth={true}
         offset={-70}
         duration={500}
         >Mariani</Link>
       </li>
   </ul>
</div>
</menu>

</>
  );
};

export default Menu;

import React from "react";
import classes from "./Menu.module.scss";
import { Link } from "react-router-dom";



const Menu = () => {
  return (
<>
<menu className={classes.menu}>
<div className={classes.menu__nav} >
   <ul >
       <li>
       <Link to="/about">contact</Link>
       </li>
       <li>
       <Link to="/about">experiment</Link>
       </li>
       <li>
       <Link to="/about">works</Link>
       </li>
       <li>
       <Link to="/about">Mariani</Link>
       </li>
   </ul>
</div>
</menu>

</>
  );
};

export default Menu;

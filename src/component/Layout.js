import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Social from "./Social";
import classes from "./Layout.module.scss";


const Layout = ({children}) => {
  return (
    <>
       <Header /> 
       <Social /> 
       <Menu /> 
      <div className={classes.container}>
    {children}
      </div>
    </>
  );
};

export default Layout;

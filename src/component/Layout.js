import React from "react";
import Header from "./Header";
import Social from "./Social";
import classes from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Social />
      <div className={classes.container}>{children}</div>
    </>
  );
};

export default Layout;

import React, { useEffect, useState } from "react";
import classes from "./Header.module.scss";
import { Link } from "react-router-dom";

// import { BiMenuAltRight } from "react-icons/bi";
// import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
      <Link to="/">
        <h2 className={classes.header__content__logo}>Mariani <span> Portfolio</span></h2>
        </Link>
        <nav
          className={classes.header__content__nav} 
          // {`${classes.header__content__nav} 
          // ${
          //   menuOpen && size.width<768 ? classes.isMenu : ""
          // }`}
          //    className="classes.header__content__nav isMenu"
        >
          <ul>
            <li>
              <Link to="/about/#about">about</Link>
            </li>
          </ul>
         
        </nav>
        {/* <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div> */}
      </div>
    </header>
  );
};

export default Header;

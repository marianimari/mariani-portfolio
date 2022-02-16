import React from "react";
import classes from "./Welcome.module.scss";

const Welcome = () => {



  return (
    <welcome className={classes.welcome}>
      <div className={classes.welcome__intro}>
        <div className={classes.welcome__intro__subtitle}>
          <p>Hi, I’m Mariani</p>
          <h1 className={classes.textSm}>
            Front  <br /> End <br /> Dev.
          </h1>

          <h1 className={classes.textPc}>
            Front End <br /> Developer.
          </h1>
         
        </div>

        <div className={classes.welcome__intro__line}></div>

        <div className={classes.welcome__intro__text}>
          With about 4 years of experience in web development, currently
          based in Indonesia and ready for remote work.
        </div>
      </div>

      <div className={classes.welcome__square}></div>
    </welcome>
  );
};

export default Welcome;

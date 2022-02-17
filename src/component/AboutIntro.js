import React from "react";
import classes from "./AboutIntro.module.scss";
import imageSrc from "./../image/image-test.png";
import classContainer from "./Layout.module.scss";


const AboutIntro = () => {
  return (
    <aboutIntro className={classes.aboutIntro}>
      <div
        className={classContainer.container__innerContainer}
      >
        <div className={classes.aboutIntro__wraper}>
          <div className={classes.aboutIntro__text}>
            <p>Get to know more</p>
            <h1>About me.</h1>
          </div>

          <img className={classes.workItem__container__image} src={imageSrc} alt="sample" /> 
        </div>
      </div>
    </aboutIntro>
  );
};

export default AboutIntro;

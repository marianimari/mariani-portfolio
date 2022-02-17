import React from "react";
import classes from "./WorkItem.module.scss";
import imageSrc from './../../image/image-test.png';

const WorkItem = () => {
  return (
    <workItem className={classes.workItem}>
      <div className={classes.workItem__container}>
        <img className={classes.workItem__container__image} src={imageSrc}  alt="dummy"/>
        <div className={classes.workItem__container__text}>
          <h3>Selected projects</h3>
          <span>Elearning / Java web</span>
        </div>
      </div>

      <div className={classes.workItem__container}>
        <img className={classes.workItem__container__image} src={imageSrc} alt="dummy"/>
        <div className={classes.workItem__container__text}>
          <h3>Selected projects</h3>
          <span>Elearning / Java web</span>
        </div>
      </div>

      <div className={classes.workItem__container}>
        <img className={classes.workItem__container__image} src={imageSrc}  alt="dummy"/>
        <div className={classes.workItem__container__text}>
          <h3>Selected projects</h3>
          <span>Elearning / Java web</span>
        </div>
      </div>
    </workItem>
  );
};

export default WorkItem;

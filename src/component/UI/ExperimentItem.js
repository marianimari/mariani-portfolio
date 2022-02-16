import React from "react";
import classes from "./ExperimentItem.module.scss";
import { BsArrowUpRight } from "react-icons/bs";

const ExperimentItem = (props) => {
  return (
    <experimentItem className={classes.experimentItem}>
      <div className={classes.experimentItem__container}>
        <div className={classes.experimentItem__container__text}>
            <div className={classes.experimentItem__container__text__title}> 
            <h2>{props.title}</h2> <span>{props.media}</span>
            </div>
            <p>{props.keywords}</p>
        </div>
     
        <BsArrowUpRight className={classes.experimentItem__icon} />
      </div>
    </experimentItem>
  );
};

export default ExperimentItem;

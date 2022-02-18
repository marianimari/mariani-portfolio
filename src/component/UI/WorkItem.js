import React from "react";
import classes from "./WorkItem.module.scss";
import { work } from "./../../data/workData";



const WorkItem = () => {


  return (
    <workItem className={classes.workItem}>
      {work.map((work) => (
        <div className={classes.workItem__container}>
          <img
            className={classes.workItem__container__image}
            src={require("./../../image/" + work.image)}
            alt="dummy"
          />
          <div className={classes.workItem__container__text}>
            <h3>{work.title}</h3>
            <span>{work.category}</span>
          </div>
        </div>
      ))}
    </workItem>
  );
};

export default WorkItem;

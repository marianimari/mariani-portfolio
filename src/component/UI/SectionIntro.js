import React from "react";
import classes from "./SectionIntro.module.scss";

const SectionIntro = (props) => {
  return (
    <sectionIntro className={classes.sectionIntro}>
      <div className={classes.sectionIntro__number}> {props.number} </div>
      <div className={classes.sectionIntro__intro}>
        <h1> {props.title} </h1>
        <div className={classes.sectionIntro__intro__text}>
          <h3> {props.subtitle} </h3> <span> {props.smallNote} </span>
          <p> {props.text} </p>
        </div>
      </div>
    </sectionIntro>
  );
};

export default SectionIntro;

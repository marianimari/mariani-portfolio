import React from "react";
import SectionIntro from "./UI/SectionIntro";
import classes from "./Work.module.scss";
import classContainer from "./Layout.module.scss";
import WorkItem from "./UI/WorkItem";

const Work = () => {
  return (
    <work className={classes.work} >
      <div className={`${classContainer.container__innerContainer} ${classContainer.paddingDefault}`} id="work">
        <SectionIntro
        number="01"
        title="Works."
        subtitle=""
        smallNote=""
        text="Selected projects, a collection of various websites that I have worked on while working at the previous company."
        />
        <WorkItem/>

      </div>

    </work>
  );
};

export default Work;

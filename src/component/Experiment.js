import React from "react";
import classes from "./Experiment.module.scss";
import SectionIntro from "./UI/SectionIntro";
import classContainer from "./Layout.module.scss";
import ExperimentItem from "./UI/ExperimentItem";

const Experiment = () => {
  return (
    <experiment className={classes.experiment}   id="experiment">
      <div
        className={`${classContainer.container__innerContainer} ${classContainer.paddingDefault}`}
    >
        <SectionIntro
          number="02"
          title="Experiments."
          // subtitle="Selected works"
          // smallNote="6 Works in total"
          text="More of mini projects and work I've done in order to explore front-end technologies and UX design featured on Figma, GitHub, etc."
        />
        <div className={classes.experiment__contentWraper}>
          <div className={classes.experiment__leftWraper}> </div>
          <div className={classes.experiment__itemWraper}>
            <a
              target="_blank"
              href="https://www.figma.com/file/91TBQUlve3jeB8rzIvduzW/Covid-App---Mariani?node-id=0%3A1"
              rel="noopener noreferrer nofollow"
            >
              <ExperimentItem
                title="Covid-19 App Design"
                media="Figma"
                keywords="UI Design / Wireframing / Prototyping "
              />
            </a>
            <a
              target="_blank"
              href="https://dribbble.com/shots/16714686-Apartment-finder-app"
              rel="noopener noreferrer nofollow"
            >
              <ExperimentItem
                title="
                Apartment finder Design"
                media="Dribbble"
                keywords="UI Exploration "
              />
            </a>
          </div>
        </div>
      </div>
    </experiment>
  );
};

export default Experiment;

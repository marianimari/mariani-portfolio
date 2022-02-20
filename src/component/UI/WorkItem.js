import React, { useEffect, useState } from "react";
import classes from "./WorkItem.module.scss";
import { workData } from "./../../data/workData";
import { Link } from "react-router-dom";


const WorkItem = (props) => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const works = workData;
    setWorks(works);
  }, [works]);

  return (
    <workItem className={classes.workItem}>
      {works.map((work) => (
        <div className={classes.workItem__container}>
          <Link key={work.id} to={`work/${work.slug}`}>
            <img
              className={classes.workItem__container__image}
              src={require("./../../image/" + work.image)}
              alt={work.title}
            />
            <div className={classes.workItem__container__text}>
              <h3>{work.title}</h3>
              <span>{work.category}</span>
            </div>
          </Link>
        </div>
      ))}
    </workItem>
  );
};

export default WorkItem;

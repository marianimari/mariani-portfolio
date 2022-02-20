import React, { useEffect, useState } from "react";
import classes from "./WorkDetail.module.scss";
import { workData } from "./../../data/workData";
import { useParams } from "react-router-dom";
import classContainer from "./../Layout.module.scss";
import MenuWork from "../MenuWork";

const WorkDetail = (props) => {
  const { slug } = useParams();
  //alert(slug);

  const [work, setWork] = useState({
    id: "",
    title: "",
    image: "",
    category: "",
    slug: "",
    brief: "",
    role: "",
    date: "",
    stack: "",
    link: "",
    linkName: "",
    source: "",
  });


  useEffect(() => {
    const work = workData.find((work) => work.slug === slug);
    setWork(work);
  }, [work, slug]);


  return (
    <>
      <workDetail className={classes.workDetail}>
        <div
          className={`${classContainer.container__innerContainer} ${classContainer.paddingDefault}`}
        >
          <div className={classes.workDetail__container__top}>
            <div className={classes.workDetail__container__top__left}>
              <p className={classes.workDetail__container__top__category}>{work.category}</p>
              <h1> {work.title}</h1>
              <div >
                <span>Link</span>
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {work.linkName}
                </a>
              </div>
              <div>
                <span>Project Date</span>
                <p>{work.date}</p>
              </div>
              <div>
                <span>Stack</span>
                <p>{work.stack}</p>
              </div>
            </div>

            <div  className={classes.workDetail__container__top__img}>
            <img
                className={classes.workItem__container__image}
               src={"https://raw.githubusercontent.com/marianimari/mariani-portfolio/master/src/image/"+work.image}
            
                alt={work.title}
              ></img>
            </div>
          </div>

          <div className={classes.workDetail__container__bottom}>
            <h4>Brief</h4>
            <p className="description">{work.brief}</p>
          </div>
          <div className={classes.workDetail__container__bottom}>
            <h4>My role</h4>
            <p className="description">{work.role}</p>
          </div>
        </div>
     
      </workDetail>
      <MenuWork /> 
    </>
  );
};

export default WorkDetail;

import React, {useEffect, useRef} from "react";
import classes from "./Welcome.module.scss";
import gsap from "gsap";


const Welcome = () => {

  const title = useRef();
  const title2 = useRef();

useEffect(() => {
  //timeline
  const tl = gsap.timeline();
  const tl2 = gsap.timeline();

  tl.from(
    title.current, 1.8, {
      opacity:0,
      y: 120,
      ease: 'power4.out',
      delay: 1,

    }
  );

  tl2.from(
    title2.current, 0.6, {
      opacity:0,
      y: 1500,
      ease: 'power6.out',

    }
  );

  

}, []);

  return (
    <welcome className={classes.welcome} id="welcome" >
      <div className={classes.welcome__intro} >
        <div className={classes.welcome__intro__subtitle} ref={title} >
          <p>Hi, I’m Mariani</p>
          <h1 className={classes.textSm}>
            Front  <br /> End <br /> Dev.
          </h1>

          <h1 className={classes.textPc} >
           <span>Front End</span>  <br /> <span>Developer.</span>
          </h1>
         
        </div>

        <div className={classes.welcome__intro__line}></div>

        <div className={classes.welcome__intro__text} >
          With about 4 years of experience in web development, currently
          based in Indonesia and ready for remote work.
        </div>
      </div>

      <div className={classes.welcome__square} ref={title2}></div>
    </welcome>
  );
};

export default Welcome;

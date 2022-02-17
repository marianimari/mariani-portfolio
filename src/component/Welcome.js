import React, {useEffect, useRef} from "react";
import classes from "./Welcome.module.scss";
import gsap from "gsap";


const Welcome = () => {

  const title = useRef();
  const title2 = useRef();

useEffect(() => {
  console.log(title.current);
  //timeline
  const tl = gsap.timeline();
  const tl2 = gsap.timeline();

  tl.from(
    title.current, 1.8, {
      opacity:0,
      y: 100,
      ease: 'power4.out',
      delay: 1,
      skewY:7,
      stagger:{
        amount: 0.3,
      }

    }
  );

  tl2.from(
    title2.current, 1, {
      opacity:0,
      x: 2000,
      ease: 'power5.out',
      delay: 0,
      skewX:7,
    }
  );

  

}, []);

  return (
    <welcome className={classes.welcome}>
      <div className={classes.welcome__intro} >
        <div className={classes.welcome__intro__subtitle} ref={title}>
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

      <div className={`${classes.welcome__square} ${classes.animate1}`} ref={title2}></div>
    </welcome>
  );
};

export default Welcome;

import React from 'react'
import classes from './AboutContent.module.scss';
import classContainer from "./Layout.module.scss";
import {BsDownload} from "react-icons/bs"

const AboutContent = () => {
  return (
   <aboutContent className={classes.aboutContent}>
       <div
          className={`${classContainer.container__innerContainer} ${classContainer.paddingDefault}`}
        >
          <div className={classes.aboutContent__wraper}>
            <div className={classes.aboutContent__wraper__text}>
              <p>After graduating from Informatics Engineering,
                   Mariani then worked at <a href='https://gloding.com/en/' target="_blank" rel="noopener noreferrer nofollow">PT Global Coding Indonesia</a> as a front-end web developer for about 4 years.</p>
              <p>Her expertise is in the area of responsive design, striving to make the web beautiful, functional, and fast. Always enthusiast in helping designers to translate the design into interactive & intuitive user interfaces with the objective to enhance user experience.</p>
              <p>Right now, she is enthusiastic about doing web projects using modern javascript framework/library (especially ReactJs) and web page builders such as WordPress & Webflow. While improving her front-end skills, she also learns about designing digital interfaces and UX best practices that solve users’ problems.</p>
            </div>
            <div className={classes.aboutContent__wraper__skill}>
              <h3>Tech & Tools.</h3>
              <div className={classes.aboutContent__wraper__skill__list}>
                <ul>
                  <li>HTML</li>
                  <li>CSS, SCSS</li>
                  <li>Bootstrap</li> 
                  <li>PrimeFaces</li> 
                  <li>JavaScript</li> 
                  <li>Java </li> 
                </ul>
                <ul>
                  <li>JQuery</li>
                  <li>ReactJs</li>
                  <li>Wordpress</li>
                  <li>Figma</li>
                  <li>Maze</li>
                  <li>Photoshop</li>


                </ul>
              </div>
            </div>
         
          </div>

          <button>
            Download my resume
            <BsDownload className={classes.icon} />
          </button>
 
        </div>
   </aboutContent>
  )
}

export default AboutContent
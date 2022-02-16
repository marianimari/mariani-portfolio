import React from "react";
import classes from "./Contact.module.scss";
import classContainer from "./Layout.module.scss";

const Contact = () => {
  return (
    <contact className={classes.contact}>
      <div className={classContainer.container__innerContainer}>
        <div className={classes.contact__title}>
          <h1>Let’s work together </h1>
        </div>
        <div className={classes.contact__email}>
          <span>Email me at</span>
          <p>mariani.workmail@gmail.com</p>
        </div>
        <footer>
          <p className={classes.copyright}>
            © Portfolio 2022 designed and developed by me.
          </p>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mariani-mariani/"
                rel="noopener noreferrer nofollow"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/marianimari"
                rel="noopener noreferrer nofollow"
              >
                Github
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://dribbble.com/marianimari"
                rel="noopener noreferrer nofollow"
              >
                Dribbble
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </contact>
  );
};

export default Contact;

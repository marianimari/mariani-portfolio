import React from "react";
import classes from "./Note.module.scss";
import classContainer from "./Layout.module.scss";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Note = () => {
  return (
    <note className={classes.note}>
      <div className={classContainer.container__innerContainer}>
        <p>
          I transform design into a digital product <br />
          that's functional, aesthetic, and fast. <br />
          With the objective of enhancing the user experience.
        </p>
        <Link to="/about">
          <button>
            More about me
            <BsArrowRight className={classes.icon} />
          </button>
        </Link>
      </div>
    </note>
  );
};

export default Note;

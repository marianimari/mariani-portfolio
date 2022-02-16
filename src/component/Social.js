import React from "react";

import { BiEnvelope } from "react-icons/bi";
import { AiFillGithub,AiOutlineDribbble } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import classes from "./Social.module.scss";

const Social = () => {
  return (
    <social className={classes.social}>
       <a href="mailto:mariani.workmail@gmail.com" rel="noopener noreferrer nofollow" >
       <BiEnvelope className={classes.social__icon} />
       </a>
       <a target="_blank" href="https://www.linkedin.com/in/mariani-mariani/" rel="noopener noreferrer nofollow" >
       <ImLinkedin2 className={classes.social__icon}/>
       </a>
       <a target="_blank" href="https://github.com/marianimari" rel="noopener noreferrer nofollow" >
       <AiFillGithub className={classes.social__icon}/>
       </a>
       <a target="_blank" href="https://dribbble.com/marianimari" rel="noopener noreferrer nofollow" >
       <AiOutlineDribbble className={classes.social__icon}/>
       </a>
 
    
    </social>
  );
};

export default Social;

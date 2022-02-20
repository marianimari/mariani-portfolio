import React from "react";
import Contact from "../component/Contact";
import AboutIntro from "../component/AboutIntro";
import AboutContent from "../component/AboutContent";
import MenuAbout from "../component/MenuAbout";

const About = () => {


  return (
    <>
      <AboutIntro />
      <main>
        <AboutContent/>
        
        <Contact />
      </main>
      <MenuAbout /> 
    </>
  );
};

export default About;

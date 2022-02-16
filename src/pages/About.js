import React from "react";
import Contact from "../component/Contact";
import AboutIntro from "../component/AboutIntro";
import AboutContent from "../component/AboutContent";

const About = () => {
  return (
    <>
      <AboutIntro />
      <main>
        <AboutContent/>
        
        <Contact />
      </main>
    </>
  );
};

export default About;

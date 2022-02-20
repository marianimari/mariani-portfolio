import React from "react";
import Welcome from "../component/Welcome";
import Note from "../component/Note";
import Contact from "../component/Contact";
import Work from "../component/Work";
import Experiment from "../component/Experiment";
import Menu from "../component/Menu";


const Home = () => {

  return (
    <>
      <Welcome />
      <main>
        <Work />
        <Experiment/>
        <Note />
        <Contact />
      </main>
      <Menu /> 
    </>
  );
};

export default Home;

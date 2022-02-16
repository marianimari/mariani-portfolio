import React from "react";
import Welcome from "../component/Welcome";
import Note from "../component/Note";
import Contact from "../component/Contact";
import Work from "../component/Work";
import Experiment from "../component/Experiment";

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
    </>
  );
};

export default Home;

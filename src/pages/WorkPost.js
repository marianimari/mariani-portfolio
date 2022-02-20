import React from "react";
import WorkDetail from "../component/workDetail/WorkDetail";
import Layout from "../component/Layout";
import MenuWork from "../component/MenuWork";

const WorkPost = (props) => {
  
  return (
    <>
    <main style={{marginTop: 0}}>
    <WorkDetail {...props} />
    </main>
    
      <MenuWork/> 
    </>
  );
};

export default WorkPost;

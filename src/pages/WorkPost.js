import React from "react";
import WorkDetail from "../component/workDetail/WorkDetail";
import Layout from "../component/Layout";

const WorkPost = (props) => {
  
  return (
    <Layout>
      <WorkDetail {...props} />
    </Layout>
  );
};

export default WorkPost;

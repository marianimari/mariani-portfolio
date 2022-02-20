import React from "react";
import Layout from "./component/Layout";
import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import WorkDetail from "./component/workDetail/WorkDetail";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/welcome" />} /> */}
         
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work/:slug" element={<WorkDetail />} />
        
        </Routes>

      </Layout>
    </>

    // <Home />
  );
}

export default App;

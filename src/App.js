import React, { useEffect } from "react";
import Layout from "./component/Layout";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import WorkDetail from "./component/workDetail/WorkDetail";
import WorkPost from "./pages/WorkPost";

function App() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

  return (
    <>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/welcome" />} /> */}
         
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work/:slug" element={<WorkPost />} />
        
        </Routes>

      </Layout>
    </>

    // <Home />
  );
}

export default App;

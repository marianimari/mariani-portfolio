import React from "react";
import Layout from "./component/Layout";
import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/welcome" />} /> */}
          <Route path="/" exact component={<Home />}/>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        
        </Routes>

      </Layout>
    </>

    // <Home />
  );
}

export default App;

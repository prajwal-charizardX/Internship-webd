import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

import React, { Suspense } from "react";
// import AboutUs from './components/About Us/AboutUs';
import Contact from "./components/Contact Us/Contact";
import Login from "./components/Login/Login";
// import Projects from './components/Projects/Projects';
import Header from "./components/HomePage/Header";
import Footer from "./components/HomePage/Footer";

const AboutUs = React.lazy(() => {
  return import("./components/About Us/AboutUs");
});
const Projects = React.lazy(() => {
  return import("./components/Projects/Projects");
});
function App() {
  return (
    <>
      <Router>
        <Suspense>
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<AboutUs />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>

          {/* <Loader  loader={loader}/> */}
          <Footer />
        </Suspense>
      </Router>
    </>
  );
}

export default App;

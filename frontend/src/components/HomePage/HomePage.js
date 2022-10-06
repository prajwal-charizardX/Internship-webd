import React from "react";
import Cards from "./Cards";

import Slider from "./Slider/Slider";

import About from "./About";
import Exp from "./Exp";
import Leading from "./leading-cons/Leading";
import Special from "./Special";

function HomePage(props) {
  return (
    <>
      <Slider />
      <Exp />
      <Leading />
      <About />
      <Cards setloader={props.setloader} />
      <Special />
    </>
  );
}

export default HomePage;

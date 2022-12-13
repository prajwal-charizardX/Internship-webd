import React from "react";
import Cards from "./Cards";
import Slider from "./Slider/Slider";
import About from "./About";
import Exp from "./Exp";
import Leading from "./leading-cons/Leading";
import Special from "./Special";
import {Helmet} from 'react-helmet-async';


function HomePage(props) {
  return (
    <>
    <Helmet>
      <title>Panchami Associates</title>
      <meta name="description" content="Welcome to Panchami Associates,We are one of the Leading Construction Company in Bangalore, Experts in building Residential & Commercial Properties" />
      <link rel="canonical" href="/" />
    </Helmet>
      <Slider />
      <Exp />
      <Leading />
      <About />
      <Cards setloader={props.setloader} />

      <Special />

      {/* <Cards setloader={props.setloader} /> */}
    </>
  );
}

export default HomePage;

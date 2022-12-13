import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import img45 from './panchamired.webp'
import { Helmet } from "react-helmet-async";
const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Helmet>
        <title>About Us</title>
        <meta
          name="description"
          content="Welcome to the About us page of  Panchami Associates,We are one of the Leading Construction Company in Bangalore, Experts in building Residential & Commercial Properties"
        />
        <link rel="canonical" href="/About" />
      </Helmet>
      <h1 id="heading">About us</h1>
      <div className="au">
        <center>
          <div className="au-pic">
            {/*checkout*/}
            <img src={img45} alt="" className="image-of-life" />
          </div>
         
        </center>
        <div className="vision" data-aos="slide-left" data-aos-once="true">
          <h2>OUR VISION</h2>
          <div className="vision-ex">
            The primary goal of Panchami Associates is to provide quality
            construction work and customer satisfaction in this construction
            industry. We cater Industrial, commercial and residential
            construction projects.We deliver highly responsive and innovative
            solutions to bridge our client's execution gaps through a deep
            understanding of their needs and a culture of shared
            commitments.Thus optimizing system functionality and improving
            operation efficiency with outstanding service
          </div>
          <div>
            <Link to="/Projects">
              <h3>KNOW OUR WORK</h3>
            </Link>
          </div>
          <div className="kartik">
          Website made by <a href="https://github.com/akashgreninja">Akash Uday</a> and <a href="https://github.com/2deadmen">kartik Hegde</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

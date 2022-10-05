import React, { useEffect } from "react";
import "./About.css";
import AOS from 'aos';
import 'aos/dist/aos.css';



const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });


}, []);
  return (
    <div className="container-about" >
        <div className="grid" >
          <div className="grid-ele1" data-aos="slide-right" >
            <div className="grid-title">01</div>
            <div className="grid-desc">
              <h2>Construction</h2>
              our workforce and associates strive to achieve excellence in every aspect of development to enhance quality of living for our customers.
            </div>
          </div>
          <div className="grid-ele2" data-aos="slide-left">
            <div className="grid-title">02</div>
            <div className="grid-desc">
              <h2>Interior Design</h2>
              We have well experienced and professional team who has deep knowledge in interior designing. We provide the most innovative interior as best as we could.
            </div>
          </div>
        </div>
      </div>
  )
}

export default About
import React, { Component } from "react";
import "./About.css";



const About = () => {
  return (
    <div className="container-about">
        <div className="grid">
          <div className="grid-ele1">
            <div className="grid-title">01</div>
            <div className="grid-desc">
              <h2>Construction</h2>
              To realize this vision, our workforce and associates strive to achieve excellence in every aspect of development to enhance quality of living for our customers.
            </div>
          </div>
          <div className="grid-ele2">
            <div className="grid-title">02</div>
            <div className="grid-desc">
              <h2>Interior Design</h2>
              We have well experienced and professional team who has deep and flexible knowledge in interior designing services. We provide the most innovative Home interior, Office interior and Commercial interior as best as we could.
            </div>
          </div>
        </div>
      </div>
  )
}

export default About

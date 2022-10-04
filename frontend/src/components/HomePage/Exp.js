import React, { Component,useEffect } from "react";
import "./Exp.css";

import AOS from 'aos';
import 'aos/dist/aos.css';


const Exp = () => {
 const cot= useEffect(() => {
    AOS.init({ duration: 2000 });


}, []);
  return (
    <>
    {" "}
    <div className="exp-grid" data-aos="slide-up">
      <div className="exp-pic-div">
        
          {" "}
          <div className="exp-30">
            <span className="n30">30</span><span>Years</span>
            <span className="expr">Experience</span>
          </div>{" "}
        
    
      </div>
      <div className="about">
        <div className="about-div">
          <span className="about-span">ABOUT US</span>
          <h1>Unique Solutions For Residentials & Industries! </h1>
        </div>
        <div className="about-span  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          vel, quibusdam asperiores eum possimus cum, reiciendis tempore,
          vitae voluptates error soluta blanditiis excepturi laborum? Iusto
          nulla suscipit cum quibusdam laborum?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptas aliquid natus incidunt, dolore ab modi consectetur dolores illum distinctio quibusdam dolorem praesentium pariatur alias quo asperiores earum quisquam laborum!
        </div>
        <div className="about-serv">
          <div className="about-serv-ch"><i class="fa-sharp fa-solid fa-check"></i><div> Ontime at services</div></div>
          <div className="about-serv-ch"> <i class="fa-sharp fa-solid fa-check"></i><div>24/7 hours services</div></div>
          <div className="about-serv-ch"> <i class="fa-sharp fa-solid fa-check"></i><div>Verified professionals</div></div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Exp
import React, { useEffect} from "react";
import "./Exp.css";
import AOS from 'aos';
import 'aos/dist/aos.css';




const Exp = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });


}, []);
  return (
    <>
    {" "}
    <div className="exp-grid" data-aos="slide-up" data-aos-once="true">
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
        To realize this vision, our workforce and associates strive to achieve excellence in every aspect of development to enhance quality of living for our customers.            </div>
        <div className="about-span  "> We have well experienced and professional team who has deep and flexible knowledge in interior designing services. We provide the most innovative Home interior, Office interior and Commercial interior as best as we could.</div>
        <div className="about-serv">
          <div className="about-serv-ch"><i className="fa-sharp fa-solid fa-check"></i><div> Ontime at services</div></div>
          <div className="about-serv-ch"> <i className="fa-sharp fa-solid fa-check"></i><div>24/7 hours services</div></div>
          <div className="about-serv-ch"> <i className="fa-sharp fa-solid fa-check"></i><div>Verified professionals</div></div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Exp

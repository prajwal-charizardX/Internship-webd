import React, { Component } from "react";
import "./Footer.css";
import  logo from './panchami-enlarged.png'

export class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="container">
            <div className="col">
              <div className="box">
               
                  <img src={logo} alt="" className="logo-img-footer" />
              
                <p>A construction and renovation company</p>

                <a className="text-primary-h" href="/">
                  
                    <i className="fab fa-linkedin-in"></i>
                  
                </a>
              </div>
              <div className="box">
                <h4>Address</h4>
                <p className="para">
                  <i className="fa-solid fa-location-dot"></i> &#160; SMR Vinay Crescent ,1st Main Rd, HBR Layout 4th Block HBR Layout, Bengaluru, Karnataka 560043
                </p>
                <p className="para">
                  <i className="fa-solid fa-phone"></i>&#160; +91 9480865676
                </p>
                <p className="para">
                  <i className="fa-solid fa-envelope"></i>&#160;
                  panchamiassociates@gmail.com
                </p>
              </div>
              <div className="box">
                <h4>Quick Links</h4>
               <div>
                  <a className="qlink" href="/">
                    <i className="fa-solid fa-chevron-right"></i>&#160;About Us
                  </a>
                </div>
                <div>
                  <a className="qlink" href="/">
                    <i className="fa-solid fa-chevron-right"></i>&#160;Contact
                    Us
                  </a>
                </div>
                <div>
                  <a className="qlink" href="/">
                    <i className="fa-solid fa-chevron-right"></i>{" "}
                    &#160;Completed Projects
                  </a>
                </div> 
                </div>
            </div>
          </div>
          <div className="copyright">
            <div>
              &copy; <a href="/">Panchami Associates</a>, All Right Reserved.{" "}
              <span></span>
              {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;

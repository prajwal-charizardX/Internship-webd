import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "./panchami-enlarged.png";

export class Footer extends Component {
  render() {
    const handleReload = () => {
      window.reload();
    };
    return (
      <>
        <div className="footer">
          <div className="container">
            <div className="col">
              <div className="box">
                <img src={logo} alt="" className="logo-img-footer" />

                <p>A construction and renovation company</p>

                <div className="text-primary">
                  {" "}
                  <a
                    className="text-primary-h"
                    href="https://www.linkedin.com/in/panchami-associates-aa4296189/"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <div className="box">
                <h4>Address</h4>
                <a href="https://goo.gl/maps/nFVBYipL7pFpUaGK8">
                  <p className="para">
                    <i className="fa-solid fa-location-dot"></i> &#160; SMR
                    Vinay Crescent ,1st Main Rd, HBR Layout 4th Block HBR
                    Layout, Bengaluru, Karnataka 560043
                  </p>
                </a>
                <a href="tel:9480865676">
                <p className="para">
                  <i className="fa-solid fa-phone"></i>&#160; +91 9480865676
                </p>
                </a>
                <a href="mailto: panchamiassociates@gmail.com">
                <p className="para">
                  <i className="fa-solid fa-envelope"></i>&#160;
                  panchamiassociates@gmail.com
                </p>
                </a>
              </div>
              <div className="box">
                <h4>Quick Links</h4>
                <div>
                  <Link className="qlink" to="/About" onClick={handleReload}>
                    <i className="fa-solid fa-chevron-right"></i>&#160;About Us
                  </Link>
                </div>
                <div>
                  <Link className="qlink" to="/Contact" onClick={handleReload}>
                    <i className="fa-solid fa-chevron-right"></i>&#160;Contact
                    Us
                  </Link>
                </div>
                <div>
                  <Link className="qlink" to="/Projects" onClick={handleReload}>
                    <i className="fa-solid fa-chevron-right"></i>{" "}
                    &#160;Completed Projects
                  </Link>
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

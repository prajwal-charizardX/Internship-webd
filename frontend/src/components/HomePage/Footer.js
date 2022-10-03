import React, { Component } from "react";
import "./Footer.css";
import  logo from './panchami-white.png'

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
                  <div className="text-primary ">
                    <i className="fab fa-linkedin-in"></i>
                  </div>
                </a>
              </div>
              <div className="box">
                <h4>Address</h4>
                <p>
                  <i className="fa-solid fa-location-dot"></i> &#160; address
                </p>
                <p>
                  <i className="fa-solid fa-phone"></i>&#160; phone number
                </p>
                <p>
                  <i className="fa-solid fa-envelope"></i>&#160;
                  panchamiassociates@gmail.com
                </p>
              </div>
              <div className="box">
                <h4>Quick Links</h4>
                <div>
                  <a href="/">
                    <i className="fa-solid fa-chevron-right"></i>&#160;About Us
                  </a>
                </div>
                <div>
                  <a href="/">
                    <i className="fa-solid fa-chevron-right"></i>&#160;Contact
                    Us
                  </a>
                </div>
                <div>
                  <a href="/">
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

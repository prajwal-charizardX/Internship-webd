import React from "react";
import { FcPhone } from "react-icons/fc";
import "./Contact.css";
import { BiCurrentLocation } from "react-icons/bi";
import {MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div className="Contact-us-start">
      <div className="Contact-us-1">Contact Us</div>
      <div className="Contact-us-2">
        <FcPhone size="3rem" className="try" />
        <div className="Contact-us-2-sub">
          <div>Name</div>
          <div>
            <a href="tel:123-456-7890">123-456-7890</a>
          </div>
        </div>
      </div>
      <div className="Contact-us-2">
        <BiCurrentLocation size="6rem" className="try" />
        <div className="Contact-us-2-sub">
          <div>Address</div>
          <div>
            <a href="https://goo.gl/maps/nFVBYipL7pFpUaGK8">
              SMR Vinay Crescent ,1st Main Rd, HBR Layout 4th Block HBR Layout,
              Bengaluru, Karnataka 560043
            </a>
          </div>
        </div>
      </div>
      <div className="Contact-us-2">
        <MdEmail size="6rem" className="try" />
        <div className="Contact-us-2-sub">
          <div>Address</div>
          <div>
            <a href="https://goo.gl/maps/nFVBYipL7pFpUaGK8">
              SMR Vinay Crescent ,1st Main Rd, HBR Layout 4th Block HBR Layout,
              Bengaluru, Karnataka 560043
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

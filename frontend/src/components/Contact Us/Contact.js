import React,{useEffect} from "react";
import { FcPhone } from "react-icons/fc";
import "./Contact.css";
import { BiCurrentLocation } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import {Helmet} from 'react-helmet-async';
import 'aos/dist/aos.css';
import AOS from 'aos';
const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });


}, []);
  return (
    <>
      <Helmet>
      <title>Contact Us</title>
      <meta name="description" content="Welcome to the Contact Us page of  Panchami Associates,We are one of the Leading Construction Company in Bangalore, you can call us anytime 24/7 " />
      <link rel="canonical" href="/About" />
    </Helmet>
    <div className="Contact-us-start">
      <div className="Contact-us-1">Contact Us</div>
      <div className="flex-for-map"  >
        <div className="gmap" >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.047301679199!2d77.63401751413578!3d13.03265981706336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae173eb25d0cb3%3A0xce63f74434e71bc1!2sSMR%20Vinay%20Crescent%2C%201st%20Main%20Rd%2C%20HBR%20Layout%204th%20Block%2C%20HBR%20Layout%2C%20Bengaluru%2C%20Karnataka%20560043!5e0!3m2!1sen!2sin!4v1664971508675!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="maps-for-panchami"
            data-aos="slide-right"  data-aos-once="true"
          ></iframe>
        </div>
        <div className="div-for-flex" data-aos="slide-left"  data-aos-once="true">
          <div className="Contact-us-2">
            <FcPhone size="3rem" className="try" />
            <div className="Contact-us-2-sub">
              <div>Name</div>
              <div>
                <a href="tel:9480865676"> 9480865676</a>
              </div>
            </div>
          </div>
          <div className="Contact-us-2">
            <BiCurrentLocation size="6rem" className="try" />
            <div className="Contact-us-2-sub">
              <div>Address</div>
              <div>
                <a href="https://goo.gl/maps/nFVBYipL7pFpUaGK8">
                  SMR Vinay Crescent ,1st Main Rd, HBR Layout 4th Block HBR
                  Layout, Bengaluru, Karnataka 560043
                </a>
              </div>
            </div>
          </div>
          <div className="Contact-us-2">
            <MdEmail size="3rem" className="try" />
            <div className="Contact-us-2-sub">
              <div>Email</div>
              <div>
                <a href="mailto: panchamiassociates@gmail.com">
                  panchamiassociates@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;

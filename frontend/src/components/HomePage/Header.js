import { Link,useNavigate } from "react-router-dom";
import "./Homepage.css";
import { CSSTransition } from "react-transition-group";
// import classNames from 'classnames';
import logo from "./panchami-enlarged-black.png";
import cloth from './cropped-cloth.jpg'


import { FiMenu } from "react-icons/fi";
import React, { useState
  // ,useEffect
 } from "react";
function Header() {
    let navigate=useNavigate()
  const handleClick = () => {
    setsidebar(true);
    console.log("pressed");
  };
  const closeClick = () => {
    setsidebar(false);
    console.log("pressed");
  };
  // eslint-disable-next-line
  const [storage, setstorage] = useState(localStorage.getItem("token"));

  

  // useEffect(() => {

  //   const item = localStorage.getItem("token");
   
  
    
  // }, [storage]);
  const goToTop = () => {
    this.scroll.scrollTo({x: 0, y: 0, animated: true});
 }


  const [sidebar, setsidebar] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <nav>
        <div className="header">
          <div className="inner-header">
            <img src={logo} alt="" className="header-logo" />
            <div className="burger-name">
              <FiMenu
                size="2rem"
                className="try"
                onClick={handleClick}
              />
            </div>

            <ul>
              <li>
                <Link to="/" className="header-li">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/About" className="header-li">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="header-li">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/Projects" className="header-li">
                  Projects
                </Link>
              </li>
              {localStorage.getItem("token") ? (
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              ) : null}
            </ul>
          </div>
          {sidebar ? (
            <CSSTransition
              in={sidebar}
              timeout={300}
              classNames="slide-in-left"
            >
              <div className="reactive-header">
              <div className="popout-logo-start">
                <img src={cloth} alt="" className=" popout-logo-start-img" />

              </div>
                <div className="reactive-header-tags">
                  <li className="border-trial">
                    <Link to="/" className="header-li" onClick={closeClick}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/About" className="header-li" onClick={closeClick}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/Contact" className="header-li" onClick={closeClick}>
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/Projects" className="header-li " onClick={closeClick}>
                      Projects
                    </Link>
                  </li>
                </div>
                
              </div>
              
            </CSSTransition>
          ) : null}

          {sidebar ? (
            <div className="background-drawer" onClick={closeClick}></div>
          ) : null}
        </div>
      </nav>
    </>
  );
}

export default Header;

import React from "react";
import pic from "./loader.gif";
import './loader.css'
function Loader(props) {
  return (
  
    <div  className="loader">
      {props.loader==true ? <img src={pic} alt=""  className="loading-img"/> : null }
   
    </div>
  
  );
}

export default Loader;

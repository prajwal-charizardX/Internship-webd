import React from "react";
import "./Project.css";
const Project = (props) => {
  return (
    <>
      <div className="Project-start">
        <div className="image-div">
          <img src={props.data.image} alt="" className="actual-image" />
        </div>
      </div>
     
        <div className=" akatest  ">
          {props.data.title}
        </div>
   
    </>
  );
};

export default Project;

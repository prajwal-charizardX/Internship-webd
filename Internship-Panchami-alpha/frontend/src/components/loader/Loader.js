import React from "react";
import pic from "./loader.gif";
function Loader(props) {
  return (
    <div className="loader">
      {props.loader ? <img src={pic} alt="" /> : null}
    </div>
  );
}

export default Loader;

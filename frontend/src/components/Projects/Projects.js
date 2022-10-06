import React, { useEffect, useState, useRef } from "react";
import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";

const Projects = (props) => {
  const initial=[{
    "title":"villa"
  }]
  const [content, setcontent] = useState(initial)
  useEffect(() => {
  
    GetAllData()
  
  
    
  }, [content])
 
  const host = "http://localhost:5000";

 
  const GetAllData = async (e) => {
    const response = await fetch(`${host}/projects/getalldata`, {
      method: "GET",
      //   real
      headers: {
        "Content-Type": "application/json",
      },
     
    });

    const json = await response.json();
    setcontent(json)
    props.setloader(false)
  
  };
  return (
   
      <div className="Project-start">
        <div >Ongoing/Finished Projects</div>
        <div className="image-div">
          <img src="https://cdn.britannica.com/71/73371-050-9DFAEC1E/Reykjavik-Iceland.jpg" alt=""  className="actual-image" />
        </div>
       
      </div>
  )
}

export default Projects;

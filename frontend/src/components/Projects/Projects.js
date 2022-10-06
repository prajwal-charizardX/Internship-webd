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
    <div>
      <div><img src="" alt="" />
      
      </div>
      
      {content.title}</div>
  )
}

export default Projects
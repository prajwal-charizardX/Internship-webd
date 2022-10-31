



import React from 'react'
import './Project.css'
const Project = (props) => {
  return (
    <div className="Project-start">
    
    <div className="image-div">
      <img src={props.data.image} alt=""  className="actual-image" />
      <h6 className='my-3'>{props.data.title}</h6>
    </div>
   
  </div>
  )
}

export default Project




import React from 'react'

const Project = (props) => {
  return (
    <div className="Project-start">
    <div >Ongoing/Finished Projects</div>
    <div className="image-div">
      <img src={props.data.image} alt=""  className="actual-image" />
    </div>
   
  </div>
  )
}

export default Project
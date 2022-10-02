import React from 'react'
import './Cards.css'
const Card = (props) => {
    const{id,image,description,title}=props.data
  return (
    <div className='card-outer'>
          <div className="Card-frame">
            <img
              src={image}
              alt="worker imave"

              
              className="image-card"
            />
            <div className="card-Title">{title}</div>
            <div className="card-text">{description}</div>
          </div>
        </div>
  )
}

export default Card
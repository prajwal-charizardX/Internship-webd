import React from 'react'
import './Cards.css'
import {BiPencil} from "react-icons/bi";
const Card = (props) => {
    const{id,image,description,title}=props.data
    const handleClick=()=>{
        console.log(id)
        props.deletecard(id)
    }
 
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
            <BiPencil size='2rem' className='try' onClick={handleClick}/>
          </div>
        </div>
  )
}

export default Card
import React from 'react'
import './Cards.css'
import {BiPencil} from "react-icons/bi";
const Card = (props) => {
    const{id,image,description,title}=props.data
    const handleClick=()=>{
        props.deletecard(id)
    }
 
  return (
    <div className='card-outer'>
          <div className="Card-frame">
            <div className='wrap-image'>
            <img
              src={image}
              alt="worker imave"

              
              className="image-card"
            />
             </div>
            <div className="card-Title">{title}</div>
            <div className="card-text">{description}</div>
          
          </div>
          {localStorage.getItem('token')?
          <BiPencil size='2rem' className='try' onClick={handleClick}/>:null}
         
        </div>
  )
}

export default Card
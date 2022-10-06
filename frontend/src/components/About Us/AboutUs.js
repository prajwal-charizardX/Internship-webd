import React from 'react'
import { Link } from "react-router-dom";

import './About.css'

const AboutUs = () => {
  return (
    <>
    <div className='au'>
      <center>
      <div className='au-pic'>
       
        
      </div>
      <h3>MR.Padmanabhan</h3>
      </center>
      <div className='vision'>
        <h2>OUR VISION</h2>
        <div className='vision-ex'>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate nihil vel error, ab nemo dicta voluptatibus, praesentium esse dolor voluptatum nobis officiis enim expedita inventore illum numquam! Nisi, illum iusto.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ipsum consequatur odio, ducimus rem sapiente nulla. At ex unde odit ipsam, cupiditate illum. Consequuntur enim rerum sint harum officia molestiae?
</div>
      <div>
        <Link to="/Projects"><h3>KNOW OUR WORK</h3></Link>
        
      </div>
      </div>
      </div>
    </>
  )
}

export default AboutUs
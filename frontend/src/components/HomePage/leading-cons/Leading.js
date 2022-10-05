import React, {useEffect}from 'react'
import './Leading.css'
import imageof from'./leading-image.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Leading = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });


}, []);
  return (
    <div className='Leading-start' >
        <div className='Leading-texts' data-aos="slide-right"  data-aos-once="true">
            <p className='H2-text'>We are one of the Leading Construction Company in Bangalore</p>
          
                <p className='for-font-life'><span>&#8226;</span> Experts in building Residential & Commercial Properties</p>
                <p className='for-font-life'> <span>&#8226;</span> Over 30 years of experience</p>
                <p className='for-font-life'><span>&#8226;</span> On-time completion and delivery of projects</p>
                <p className='for-font-life'><span>&#8226;</span> Clear and Transparent Pricing</p>
                <p className='for-font-life'><span>&#8226;</span> Excellent Customer Support</p>
               
        </div>
        <div className='Leading-pic' data-aos="zoom-out-left"  data-aos-once="true">
            <img src={imageof} alt=""  className='Leading-pic-img'/>
                
            </div>
    </div>
  )
}

export default Leading
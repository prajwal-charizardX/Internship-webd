import React from 'react';
import Pic1 from './pics/0ad2396d-be8c-4970-b4f4-bfff04dac5d6.jpg'
import Pic2 from './pics/pic2.webp'
import Pic3 from './pics/Pic3.jpg'
import Picz from './pics/Pic1.webp'
import './slider.css'
function Slider() {
  return (

    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <center>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src={Pic2} class="d-block w-95" alt="..." height={500}/>
        <div class="carousel-caption d-md-block">
          <h5>Our Services</h5>
          <p>construction and renovation and interior on a turnkey basis</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
      <img src={Picz} class="d-block w-99" alt="..." height={500}/>
        <div class="carousel-caption  d-sm-block ">
          <h5>We Specialize in</h5>
          <p>3d elevation and structural design,planning</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src={Pic3} class="d-block w-95" alt="..." height={500}/>
        <div class="carousel-caption d-none d-md-block">
          <h5></h5>
          <p>.</p>
        </div>
      </div>
    </div>
    </center>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Slider
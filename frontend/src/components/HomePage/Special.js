import React from 'react'
import './Special.css'

const Special = () => {
  return (
    <>
    {" "}
    <div className="exp-grid" data-aos="slide-up">
      
      <div className="sp">
        <div className="sp-div">
          <span className="sp-span">Why Choose Us</span>
          <h1>Our Specialization And Company Features </h1>
        </div>
        <div className="sp-span  "> We have well experienced and professional team who has deep and flexible knowledge in interior designing services. We provide the most innovative Home interior, Office interior and Commercial interior as best as we could.</div>

        <div className="sp-serv">
          <div className="sp-serv-ch"><i class="fa-solid fa-hourglass-half"></i><div> Timely Delivery</div></div>
          <div className="sp-serv-ch"><i class="fa-solid fa-sack-dollar"></i><div>No Hidden Charges</div></div>
          <div className="sp-serv-ch"><i class="fa-solid fa-file-circle-check"></i><div>Construction Guarantee</div></div>
          <div className="sp-serv-ch"><i id='subcontract' class="fa-solid fa-handshake-slash"></i><div id='subexp'>No Subcontracting</div></div>
  </div>
      </div>
      <div className="exp-pic-div">
        
          {" "}
          <div className="exp-30" id='sp'>
            <span className="n30">30</span><span>Years</span>
            <span className="expr">Experience</span>
          </div>{" "}
        
    
      </div>
    </div>
  </>  )
}

export default Special
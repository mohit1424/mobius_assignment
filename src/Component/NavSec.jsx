import React from 'react'
import './NavSec.css'

function NavSec() {
  return (
    <>
  <div className='line'></div>
<hr />
<div className="step">
  <h1>How we work</h1>

  <div className="step-container">
    <div className="steps-grid">
      <div className="one">
        <p className="circle">1</p>
        <p>Submit Intake Form</p>
      </div>

      <div className="one">
        <p className="circle">2</p>
        <p>We do the search and curation for list of jobs</p>
      </div>

      <div className="one">
        <p className="circle">3</p>
        <p>You approve, we do the tedious part (applying)</p>
      </div>

      <div className="one">
        <p className="circle">4</p>
        <p>You get the interviews</p>
      </div>
    </div>

    <div className="ebook-section">
      <img 
        srcSet="https://static.wixstatic.com/media/41ecaa_ece949177dc14b438c5b2501ca635540~mv2.png/v1/crop/x_0,y_93,w_1592,h_2061/fill/w_346,h_448,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-10-15%20at%205_26_08%20PM.png" 
        alt="E-Book Cover" 
      />
      <button className="download-btn">Download our free E-Book</button>
    </div>
  </div>
</div>
    </>
  )
}

export default NavSec

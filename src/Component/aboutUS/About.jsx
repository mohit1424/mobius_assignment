import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      
      {/* Ashwin's Section */}
      <h1>About Us</h1>
      <div className="profile-section">
        <img
          srcSet="https://static.wixstatic.com/media/5bc310_4e0b1ef9b859423da8016acc403cb337~mv2.png/v1/fill/w_248,h_436,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pro%203.png"
          alt="Ashwin"
          className="profile-image ashwin-image"
        />
        <div className="profile-text">
          <p>
            Ashwin is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. 
            With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. 
            Ashwin is an MBA holder from Yale University.
            <br /><br />
            Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.
          </p>
          <a href="#">Ashwin's LinkedIn</a>
        </div>
      </div>

      {/* Nicole's Section */}
      <div className="profile-section">
        <img
          srcSet="https://static.wixstatic.com/media/41ecaa_b58e267d5c894607b3235816f7171d92~mv2.jpeg/v1/fill/w_314,h_314,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-02-24%20at%206_03_02%20PM.jpeg"
          alt="Nicole"
          className="profile-image nicole-image"
        />
        <div className="profile-text">
          <p>
            Nicole is an Executive coach at Mobius specializing in resume builds and career advisory.
            <br /><br />
            With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, 
            she has seen firsthand how the proper positioning opens doors. 
            She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.
          </p>
          <a href="#">Nicole's LinkedIn</a>
        </div>
      </div>

      {/* Bottom links centered */}
      <div className="bottom-links">
        <a href="#">Learn more about our Board of Advisors</a>
        <p style={{'margin-left':'-4rem'}}>Follow us on our <a href="#">LinkedIn page</a></p>
      </div>
    </div>
  );
}

export default About;

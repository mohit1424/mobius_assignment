import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top-row">
        <div className="footer-info">
          <h1>Mobius Services LLC</h1>
          <p>1875 San Francisco, CA 94103</p>
          <p>Tel: 650-889-6026</p>
          <p>finance@mobiusengine.ai</p>
          <img 
            src="https://static.wixstatic.com/media/5bc310_986847197cba4b5ebf919aad737b3f29~mv2.png/v1/fill/w_360,h_360,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo.png" 
            alt="Mobius Logo" 
            className="footer-logo"
          />
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom-row">
        <div className="social-icons">
          <a href="https://www.reddit.com/r/mobiusengine/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111589.png" alt="Reddit" />
          </a>
          <a href="https://www.linkedin.com/company/mobiusservices/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" />
          </a>
        </div>

        <p className="footer-text">Auto apply job applications © 2023 Mobiusservices LLC</p>

        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>

      <a 
        href="https://wa.me/yourwhatsappphonenumber" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>
    </footer>
  );
}

export default Footer;

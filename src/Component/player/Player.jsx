import React from 'react';
import './Player.css';

function Player() {
  return (
    <div className="player-container">
      <h1>What our clients have to say</h1>

      <div className="video-row">
        {/* Holly Section */}
        <div className="video-section">
          <p className="video-title">Holly is a senior executive who got over 10 job interviews and an offer she accepted</p>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/2q30UklnQl0?si=oFIoO4MQXxu_9x9m"
              title="Holly Testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Joshua Section */}
        <div className="video-section">
          <p className="video-title">Joshua is a senior software engineer who has accepted an offer</p>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/e3Vyi-wnorM?si=Iy2SC_kVHYnwbCry"
              title="Joshua Testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Link */}
      <div className="bottom-link">
        <p>More customer testimonials at our <a href="#">LinkedIn page</a></p>
      </div>
    </div>
  );
}

export default Player;

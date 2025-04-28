import React from 'react';
import './HeroVideo.css';

function HeroVideo() {
  return (
    <div className="hero-video-container">
      <h1>Mobius Advanced - Custom Resume for Every Job</h1>
      <p>We use our own proprietary AI model to customize each job application</p>
      <p className="note">*currently only available to our advanced customers</p>

      <div className="videos-grid">
        {/* 6 Videos */}
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/IGcxoasEfs8?si=xDJPUOt9v9_jOnLN"
            title="Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/UsCyfHdEG6o?si=T-IvvM2uX_kXndts"
            title="Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/ReJM3C2j-ZU?si=KWbrAWilaLru5yzI"
            title="Video 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/Ssvh19jzlr4?si=DI3ZCIfu6LMmG-4R"
            title="Video 4"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/zW5nZ0Hp95k?si=7GSHznzmN0AQRJVP"
            title="Video 5"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/87Jor5G_NBs?si=3Z9Hy8Cx-EkQkWUf"
            title="Video 6"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/eVjfpr0j6Yw?si=uSSBTp1gYWGy0QFX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div className="video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9eorW2IdK8M?si=IO8huGgBflxiOPmn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

    </div>
  );
}

export default HeroVideo;

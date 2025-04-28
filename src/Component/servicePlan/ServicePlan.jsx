import React from 'react';
import './ServicePlan.css';

function ServicePlan() {
  return (
    <div className='service-plan'>
      <h1>Job Application Service Plans</h1>

      {/* First Row - Single Card */}
      <div className='first-row'>
        <div className='card'>
          <h3>April Promo</h3>
          <h1>$35/wk</h1>
          <ul>
            <li>Everything in Promo plan</li>
            <li>Resume review and feedback report - format and storytelling</li>
            <li>Dedicated search specialist</li>
            <li>Additional apps $1.5/application</li>
            <li>Analyst support with 6 hour SLA / PST hours</li>
          </ul>
          <button>Sign up now</button>
        </div>
      </div>

      {/* Second Row - Three Cards */}
      <div className='second-row'>
        <div className='card'>
          <h3>Promo</h3>
          <h1>$35/wk</h1>
          <ul>
            <li>Everything in Promo plan</li>
            <li>Resume review and feedback report - format and storytelling</li>
            <li>Dedicated search specialist</li>
            <li>Additional apps $1.5/application</li>
            <li>Analyst support with 6 hour SLA / PST hours</li>
          </ul>
          <button>Sign up now</button>
        </div>

        <div className='card'>
          <h3>Plus</h3>
          <h1>$100/wk</h1>
          <ul>
            <li>Everything in Starter</li>
            <li>Up to 75 apps/week</li>
            <li>Apply to up to 15 job titles</li>
            <li>Analyst support (6-hour SLA)</li>
            <li>Dedicated application team on Pacific hours</li>
          </ul>
          <button className='down1'>Sign up now</button>
        </div>

        <div className='card'>
          <h3>Advanced</h3>
          <h1>$150/wk</h1>
          <ul>
            <li>Custom Resumes & CL's</li>
            <li>Support for complex search criteria</li>
            <li>Up to 20 customized applications/week</li>
            <li>Senior advanced application team w/ resume specialist</li>
            <li>Access to Founder, CEO and Executive coaches</li>
          </ul>
          <button>Sign up now</button>
        </div>
      </div>

      <h1>Resume Building & Coaching</h1>
      <p>schedule a call with us to discuss more</p>

      <div className="card-wrapper"> {/* New wrapper for centering */}
      <div className="card">
        <h3>Resume Rebuild</h3>
        <h1>$1000</h1>
        <h4>one-time</h4>
        <ul>
          <li>Rebuild your resume to position you in the strongest possible way toward a seniority, specific company, industry, or function</li>
          <li>Coaching sessions - 3x / 30 minutes</li>
          <li>Best for Senior to VP level positioning</li>
          <li>Focus is on storytelling rather than moving words and format around</li>
          <li>Work directly with our co-founder who has 20+ years of leadership experience at Google and JP Morgan</li>
          <li>Work with our Executive coach (UC Berkeley, 10+ years of executive experience)</li>
          <li>Resume Rebuild portfolio available upon request</li>
        </ul>
        <button>Sign up now</button>
      </div>

      <div className="card">
        <h3>Interview Prep</h3>
        <h1>$500</h1>
        <h4>one-time</h4>
        <ul>
          <li>Two 45-minute sessions with our co-founder, who has hired/coached 100's at Google, JP Morgan, and Reuters​</li>
          <li>Targeted and real-time interview feedback</li>
          <li>Focus on clarity, confidence, empathy, communicating value</li>
          <li>Senior to executive roles, both technical and non technical</li>
        </ul>
        <button className='down'>Sign up now</button>
      </div>
    </div>
        
    </div>
  );
}

export default ServicePlan;

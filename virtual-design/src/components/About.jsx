import React from 'react';
import '../index.css'; // Import CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About TSN</h1>

      <img  className='AboutImg' src="living-room.jpg" alt="About pic" />

      <div className="about-content">
        <h2>About TSN Interior Design</h2>
      
 <h2>Who Are We?</h2>
        <p>
          TSN Interior Design is a passionate team of creative professionals
          dedicated to redefining interior spaces. With a blend of artistic
          vision and technical expertise, we aim to create environments that
          not only meet our clients' needs but exceed their expectations.
        </p>

        <h2>Our Vision</h2>
        <p>
          At TSN Interior Design, our vision is to redefine interior spaces by
          blending aesthetics with practicality, creating environments that
          inspire and enrich the lives of those who inhabit them. We strive to
          set new standards in the industry by seamlessly integrating timeless
          design principles with modern innovations.
        </p>

        <button>Contact us</button>
      </div>
    </div>
  );
};

export default About;

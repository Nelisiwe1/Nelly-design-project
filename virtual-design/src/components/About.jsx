import React from 'react';
import '../index.css'; // Import CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About TSN</h1>

      <img src="living-room.jpg" alt="About pic" />

      <div className="about-content">
        <h2>About TSN Interior Design</h2>
        <p>
          Welcome to TSN Interior Design, where creativity meets functionality
          to transform spaces into captivating environments. At TSN, we believe
          that every space has its own unique story waiting to be told, and our
          mission is to bring that story to life through innovative design
          solutions.
        </p>

        {/* <h2>Our Vision</h2>
        <p>
          At TSN Interior Design, our vision is to redefine interior spaces by
          blending aesthetics with practicality, creating environments that
          inspire and enrich the lives of those who inhabit them. We strive to
          set new standards in the industry by seamlessly integrating timeless
          design principles with modern innovations.
        </p>

        <h2>Our Approach</h2>
        <p>
          TSN Interior Design takes a collaborative approach to every project,
          working closely with our clients to understand their vision,
          preferences, and functional requirements. Our team of experienced
          designers utilizes their expertise to conceptualize and execute
          designs that exceed expectations while staying true to our client's
          vision.
        </p>

        <p>
          We believe in the power of attention to detail and craftsmanship,
          ensuring that every aspect of our designs reflects quality and
          sophistication. From concept development to final execution, we are
          committed to delivering exceptional results that surpass our clients'
          aspirations.
        </p>

        <h2>Our Commitment</h2>
        <p>
          At TSN Interior Design, we are committed to excellence in everything
          we do. From concept to completion, we prioritize client satisfaction,
          innovation, and integrity. Our dedication to quality craftsmanship and
          attention to detail sets us apart, making us the trusted choice for
          discerning clients seeking exceptional interior design solutions.
        </p> */}

        <button>Contact us</button>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // import carousel styles
import img1 from '../assets/bar.jpg';
import img2 from '../assets/kitchen.jpg';
// import img3 from '../assets/render.jpg';

const Slide = () => {
  return (
    <Carousel>
      <div>
        <img src={img1} alt="Bar" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={img2} alt="Kitchen" />
        <p className="legend">Legend 2</p>
      </div>
      {/* <div>
        <img src={img3} alt="Render" />
        <p className="legend">Legend 3</p>
      </div> */}
    </Carousel>
  );
};

export default Slide;

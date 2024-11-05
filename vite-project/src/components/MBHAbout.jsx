// src/MegaBoysHostelAbout.js

import React from 'react';

// Replace with the actual path to your image
import './MBHAbout.css'

const MBHAbout = () => {
  return (
    <div className="mbh-about-container">
      <div className="text-content">
        <h1 className='about'><span>ABOUT</span><hr/></h1>
        <h1> MEGA BOYS HOSTEL</h1>
        <p>
          The Mega Boys Hostel at NIT Jalandhar offers a premier living experience for both undergraduate 
          and postgraduate students. Designed with modern amenities, the hostel aims to create a comfortable 
          and conducive environment for academic and personal growth.
        </p>
        <p>
          Facilities include spacious rooms, high-speed internet, recreational areas, 24/7 security, and 
          diverse dining options. The hostel provides students with a supportive community and all the necessary 
          resources to excel in their studies and personal development.
        </p>
        <p>
          The Mega Boys Hostel not only fosters a sense of camaraderie among its residents but also enhances 
          their overall college experience through its well-maintained facilities and supportive environment.
        </p>
      </div>
      <div className="image-content">
        <img src="src/images/image3.jpg" alt="Mega Boys Hostel" />
      </div>
    </div>
  );
};

export default MBHAbout;

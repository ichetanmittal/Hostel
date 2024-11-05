// src/Mess.js

import React from 'react';
import './MBHMess.css';


const MBHMess = () => {
  return (
    <div className="mess-container">
      <div className="text-content">
        <h1 className='mess-heading'>
          <span>MESS</span>
          <hr />
        </h1>
        <p>
          The Mega Boys Hostel provides a separate dining facility for all hostel residents, ensuring a clean and hygienic environment. 
          The self-service system is promoted to offer convenience and efficiency. 
        </p>
        <p>
          Our menu is thoughtfully designed considering the nutritional requirements of the students, offering a balanced diet to support their academic and physical well-being. 
          The mess provides breakfast, lunch, and dinner regularly, ensuring that students have access to wholesome meals throughout the day.
        </p>
      </div>
      <div className="image-content">
        <img src="src/images/messimg.jpg" alt="Bhawan Mess" />
      </div>
    </div>
  );
};

export default MBHMess;

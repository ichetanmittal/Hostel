// src/ChiefWardenMessage.js

import React from 'react';
import './WardenMessage.css'

const WardenMessage = () => {
  return (
    <div className="chief-warden-container">
      <div className="image-content">
        <img src="src/images/chiefwarden.jpg" alt="Dr. Shailendra Bajpai" />
        <p><span>Dr. Shailendra Bajpai</span><br/>
        Chief Warden</p>
      </div>
      <div className="text-content">
        <h1 className='message'>
          MESSAGE
          <hr />
        </h1>
        <h1>FROM THE CHIEF WARDEN</h1>
        <p>
          Dear Students,
        </p>
        <p>
          I am delighted to welcome you to the Mega Boys Hostel at NIT Jalandhar. Our hostel is designed to 
          provide you with the best living experience, ensuring that you have all the support you need during 
          your time here.
        </p>
        <p>
          We are committed to offering modern amenities, a safe and secure environment, and a community that 
          encourages personal and academic growth. Our team is here to assist you and ensure that your stay is 
          comfortable and productive.
        </p>
        <p>
          I look forward to seeing you thrive in our hostel and make the most of your time at NIT Jalandhar.
        </p>
        <p>
          Best Regards,
        </p>
        <p>
        
        Chief Warden,

Dr B R Ambedkar NIT, Jalandhar

        </p>
      </div>
    </div>
  );
};

export default WardenMessage;

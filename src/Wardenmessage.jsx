import React from 'react';
import './wardenmessage.css';
import DirectorImage from './1708596109985-Self pic.jpg';

const Wardenmessage = () => {
  return (
    <div className="director-container">
      <div className="director-image">
        <img src={DirectorImage} alt="Director" />
      </div>
      <div className="director-text">
        <h2>Chief Warden Message</h2>
        <h3>Prof. Shailendra Bajpai</h3>
        <p>
        Welcome to our hostel community! We are committed to providing a safe, comfortable, and nurturing environment that fosters personal growth and academic excellence. Our team is dedicated to supporting you throughout your stay, ensuring you feel at home and have access to the resources you need to succeed. We encourage a spirit of respect, cooperation, and inclusivity, where students from diverse backgrounds can learn from each other and thrive together. We look forward to making your hostel experience a memorable and enriching part of your academic journey.
        </p>
        <a href="#read-more">Read All &rarr;</a>
      </div>
    </div>
  );
}

export default Wardenmessage;

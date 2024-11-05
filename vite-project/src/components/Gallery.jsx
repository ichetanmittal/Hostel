import React from 'react';
import Gallerydata from './Gallerydata';
import './Gallery.css';

const Gallery = () => {
  return (
    <div>
      <div className="section-title" data-aos="zoom-out">
        <h2>GALLERY<span><hr/></span></h2>
        <p>RECENT ACITIVITES & EVENTS</p>
      </div>
      <div className='cont'>
        <div className='portfolio-container'>
          {Gallerydata.map((item, index) => (
            <div key={index} className="portfolio-item">
              <div className="portfolio-img">
                <img
                  src={item.imgSrc}
                  className="img-fluid"
                  alt={item.alt}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

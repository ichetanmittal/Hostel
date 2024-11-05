import React, { useState } from 'react';
import facilitiesData from './FacilitiesData';
import './Facilities.css'

const Facilities = () => {
  const [item, setItem] = useState(facilitiesData);

  return (
    <>
      <h1 className='facilities-heading'>
        <span>FACILITIES</span>
        <hr />
      </h1>
      <div className='allfacilities'>
        {item.map((elem) => {
          const { facilityimg,type, title, description, quote } = elem;
          return (
            <div className='facility-container' key={type}>
              <div className='facility-logo'>
              <img src={facilityimg}></img>
              </div>
              <div className='facility-details'>
                <h1>{title}</h1>
                <p>{description}</p>
                <h3>{quote}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Facilities;

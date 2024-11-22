import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HostelContent from './HostelContent'; // Import the HostelContent data
import './Facilities.css';

const Facilities = () => {
  const { hostelId } = useParams();  // Get the hostelId from the URL params
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    // Log hostelId to check if it's correct
    console.log('Hostel ID from URL:', hostelId);  // Log hostelId

    // Check if the hostelId exists in HostelContent and update the state
    if (hostelId && HostelContent[hostelId]) {
      console.log('Facilities found:', HostelContent[hostelId].facilities);  // Log the facilities data
      setFacilities(HostelContent[hostelId].facilities);
    } else {
      console.log('No facilities found for this hostel.');
      setFacilities([]); // Clear the facilities in case of no match
    }
  }, [hostelId]);

  return (
    <>
      <h1 className='facilities-heading'>
        <span>FACILITIES</span>
        <hr />
      </h1>
      
      {facilities.length === 0 ? (
        <p>No facilities available for this hostel.</p>
      ) : (
        <div className='allfacilities'>
          {facilities.map((facility) => {
            const { type, title, description, quote, image } = facility;
            return (
              <div className='facility-container' key={type}>
                <div className='facility-logo'>
                  <img
                    src={image}
                    alt={`Facility logo for ${title}`}
                    loading="lazy"
                  />
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
      )}
    </>
  );
};

export default Facilities;

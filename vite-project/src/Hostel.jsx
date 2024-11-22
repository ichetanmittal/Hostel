import React from 'react';
import { useParams, Link } from 'react-router-dom';  // Import Link from 'react-router-dom'
import HostelContent from './components/HostelContent';
import { Navbar } from './components/Navbar';
import Carousel from './components/Carousel';
import { Contact } from './components/Contact';
import MBHAbout from './components/MBHAbout';
import WardenMessage from './components/WardenMessage';
import MBHMess from './components/MBHMess';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery'; // Import Gallery
import { Footer } from './components/Footer';

const Hostel = () => {
  const { hostel } = useParams(); // Extract the hostel from the URL
  const currentHostel = HostelContent[hostel]; // Fetch content for the current hostel

  if (!currentHostel) {
    return <h1>Hostel not found</h1>;
  }

  return (
    <>
      <Navbar />
      <Carousel 
  images={currentHostel.carouselImages} 
  title={`Welcome to ${currentHostel.name}`} 
  subtitle="A home away from home" 
/>

      <MBHAbout 
        name={currentHostel.name}
        description={currentHostel.description}
        image={currentHostel.image} 
      />
      <WardenMessage 
        wardenMessage={currentHostel.wardenMessage} 
        wardenName={currentHostel.wardenName} 
        wardenImage={currentHostel.wardenImage} 
      />
      <MBHMess 
        messDetails={currentHostel.mess}  
        messImage={currentHostel.messImage} 
      />
      
      {/* List the facilities and link to the Facilities page */}
      <div className="facilities-list">
        {currentHostel.facilities.map((facility, index) => (
          <div key={index}>
            <h3>{facility.title}</h3>
            <p>{facility.description}</p>
            {/* Link to the facilities page for this hostel */}
            <Link to={`/facilities/${hostel}`}>View Facilities</Link>
          </div>
        ))}
      </div>

      <Contact contact={currentHostel.contact} />
      <Gallery gallery={currentHostel.gallery} /> {/* Pass gallery data */}
      <Footer />
    </>
  );
};

export default Hostel;

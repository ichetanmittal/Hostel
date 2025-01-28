import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HostelContent from './components/HostelContent';
import { Navbar } from './components/Navbar';
import Carousel from './components/Carousel';
import { Contact } from './components/Contact';
import MBHAbout from './components/MBHAbout';
import WardenMessage from './components/WardenMessage';
import MBHMess from './components/MBHMess';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import { Footer } from './components/Footer';

const Hostel = () => {
  const { hostel } = useParams(); // Extract the hostel from the URL
  const currentHostel = HostelContent[hostel]; // Fetch content for the current hostel

  // Scroll to top when component is mounted
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);

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
      
      {/* About Section */}
      <div id="about">
        <MBHAbout
          name={currentHostel.name}
          description={currentHostel.description}
          image={currentHostel.image}
        />
      </div>
      <WardenMessage 
        wardenMessage={currentHostel.wardenMessage} 
        wardenName={currentHostel.wardenName} 
        wardenImage={currentHostel.wardenImage} 
      />

      {/* Mess Section */}
      <div id="mess">
        <MBHMess
          messDetails={currentHostel.mess}
          messImage={currentHostel.messImage}
        />
      </div>

      {/* Facilities Section */}
      <div id="facilities">
        <Facilities facilities={currentHostel.facilities} />
      </div>

      {/* Gallery Section */}
      <div id="gallery">
        <Gallery gallery={currentHostel.gallery} />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <Contact contact={currentHostel.contact} />
      </div>

      <Footer />
    </>
  );
};

export default Hostel;

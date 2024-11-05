// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import { Navbar } from './components/Navbar';
import Carousel from './components/Carousel';
import MBHAbout from './components/MBHAbout';
import WardenMessage from './components/WardenMessage';
import MBHMess from './components/MBHMess';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import { Footer } from './components/Footer';
const App = () => {
  return (
    <>
      <Navbar />
      <Carousel/>
      <MBHAbout/>
      <WardenMessage/>
      <MBHMess/>
      <Facilities/>
      <Gallery/>
      <Footer/>
    </>
  );
};

export default App;

import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; 
import gsap from "gsap";

const Carousel = () => {
  useEffect(() => {
    const introline = document.querySelector(".hometext h1");
    const text = introline.textContent;
    introline.innerHTML = text.split("").map(letter => `<span>${letter}</span>`).join("");

    gsap.from(".hometext h1 span", {
      opacity: 0,
      duration: 0.1,
      stagger: 0.05,
      ease: "power1.inOut"
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false
  };

  return (
    <>
      <div className='hometext'>
        <h1>WELCOME TO MEGA BOYS HOSTEL</h1>
        <i>a home away from home</i>
      </div>
      <Slider {...settings}>
        <div className='slideimg'>
          <img className="d-block w-100" src="./src/images/image1.jpg" alt="First slide" />
        </div>
        <div className='slideimg'>
          <img className="d-block w-100" src="./src/images/image2.jpg" alt="Second slide" />
        </div>
        <div className='slideimg'>
          <img className="d-block w-100" src="./src/images/image3.jpg" alt="Third slide" />
        </div>
        <div className='slideimg'>
          <img className="d-block w-100" src="./src/images/image4.jpg" alt="Fourth slide" />
        </div>
        <div className='slideimg'>
          <img className="d-block w-100" src="./src/images/image5.jpeg" alt="Fifth slide" />
        </div>
        <div className='slideimg'>
          <img className="d-block w-100" src="./src/images/image6.jpg" alt="Sixth slide" />
        </div>
      </Slider>
    </>
  );
}

export default Carousel;

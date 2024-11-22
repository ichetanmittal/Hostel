import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; 
import gsap from "gsap";

const Carousel = ({ images, title, subtitle }) => {
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
        <h1>{title}</h1>
        <i>{subtitle}</i>
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className='slideimg' key={index}>
            <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </>
  );
}

export default Carousel;

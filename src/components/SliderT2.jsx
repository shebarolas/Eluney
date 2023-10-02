import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pucon1 from '../imgs/Pucon1.jpg';
import pucon2 from '../imgs/Pucon2.jpg';
import pucon3 from '../imgs/Pucon3.jpg';
import pucon4 from '../imgs/Pucon4.jpg';
import pucon5 from '../imgs/Pucon5.jpg';

export const SliderT2 = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 7000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,

    };
  return (
    <Slider {...settings} className="sliderss">
        <div className="imagess">
            <img src={pucon1} alt="Slide 1" />
        </div>
        <div className="imagess">
            <img src={pucon2} alt="Slide 2" />
        </div>
        <div className="imagess">
            <img src={pucon3} alt="Slide 2" />
        </div>
        <div className="imagess">
            <img src={pucon4} alt="Slide 2" />
        </div>
        <div className="imagess">
            <img src={pucon5} alt="Slide 2" />
        </div>
    </Slider>
  )
}

import React from 'react'
import Slider from "react-slick";
import caba1 from "../imgs/cabañas invierno.jpg"
import caba2 from "../imgs/Cabañas.jpg"
import caba3 from "../imgs/cafeteria 2.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/slider.css';

export const Sliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <Slider {...settings} className="slider">
        <div className="images">
            <img src={caba1} alt="Slide 1" />
        </div>
        <div className="images">
            <img src={caba2} alt="Slide 2" />
        </div>
        <div className="images">
            <img src={caba3} alt="Slide 3" />
        </div>
    </Slider>
  )
}

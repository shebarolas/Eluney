import React from 'react'
import Slider from "react-slick";
import caba1 from "../imgs/banner1.jpg"
import caba2 from "../imgs/banner2.jpg"
import caba3 from "../imgs/banner3.jpg"
import caba4 from "../imgs/banner4.jpg"
import caba5 from "../imgs/banner5.jpg"
import caba6 from "../imgs/banner6.jpg";
import caba7 from "../imgs/banner7.jpg";
import caba8 from "../imgs/banner8.jpg";
import caba9 from "../imgs/banner9.jpg";
import caba10 from "../imgs/banner10.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/slider.css';


export const Sliders = () => {
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
        <div className="images">
            <img src={caba4} alt="Slide 3" />
        </div>
        <div className="images">
            <img src={caba5} alt="Slide 3" />
        </div>
        <div className="images">
            <img src={caba6} alt="Slide 3" />
        </div>
        <div className="images">
            <img src={caba7} alt="Slide 3" />
        </div>
        <div className="images">
            <img src={caba8} alt="Slide 3" />
        </div>
        <div className="images">
            <img src={caba9} alt="Slide 3" />
        </div>
        <div className="images">
            <img src={caba10} alt="Slide 3" />
        </div>
    </Slider>
  )
}

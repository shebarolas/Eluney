import React from 'react'
import Slider from "react-slick";
import cafe1 from '../imgs/Cafeteria01.jpg';
import cafe2 from '../imgs/Cafeteria02.jpg';
import cafe3 from '../imgs/Cafeteria03.jpg';
import cafe4 from '../imgs/Cafeteria04.jpg';
import cafe5 from '../imgs/Cafeteria05.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/slidersF.css'

export const SliderCafe = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <Slider {...settings} className="sliders sliderCafe">
        <div className="imagesS imagesCafe">
            <img src={cafe1} alt="" />
        </div>
        <div className="imagesS imagesCafe">
            <img src={cafe2} alt="" />
        </div>
        <div className="imagesS imagesCafe">
        <img src={cafe3} alt="" />
        </div>
        <div className="imagesS imagesCafe">
        <img src={cafe4} alt="" />
        </div>
        <div className="imagesS imagesCafe">
        <img src={cafe5} alt="" />
        </div>
      
    </Slider>
  )
}

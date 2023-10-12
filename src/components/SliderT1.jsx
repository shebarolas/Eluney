import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import salto1 from '../imgs/SaltosA1.jpg';
import salto2 from '../imgs/SaltosA2.jpg';
import congelado from '../imgs/SaltoCongelado.jpg';

export const SliderT1 = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 7000,

    };
  return (
    <Slider {...settings} className="sliderss">
        <div className="imagess">
            <img src={salto1} alt="Slide 1" />
        </div>
        <div className="imagess">
            <img src={salto2} alt="Slide 2" />
        </div>
        <div className="imagess">
            <img src={congelado} alt="Slide 3" />
        </div>
    </Slider>
  )
}

import React from 'react'
import Slider from "react-slick";
import caba1 from "../../imgs/cab1.jpg"
import caba2 from "../../imgs/cab2.jpg"
import caba3 from "../../imgs/cab3.jpg"
import caba4 from "../../imgs/cab4.jpg";
import caba5 from "../../imgs/cab5.jpg";
import caba6 from "../../imgs/cab6.jpg";
import caba7 from "../../imgs/cab7.jpg";
import caba8 from "../../imgs/cab8.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../styles/slidersF.css'

export const Sliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <Slider {...settings} className="sliders">
        <div className="imagesS">
            <img src={caba1} alt="Slide 1" />
        </div>
        <div className="imagesS">
            <img src={caba2} alt="Slide 2" />
        </div>
        <div className="imagesS">
            <img src={caba3} alt="Slide 3" />
        </div>
        <div className="imagesS">
            <img src={caba4} alt="Slide 3" />
        </div>
        <div className="imagesS">
            <img src={caba5} alt="Slide 3" />
        </div>
        <div className="imagesS">
            <img src={caba6} alt="Slide 3" />
        </div>
        <div className="imagesS">
            <img src={caba7} alt="Slide 3" />
        </div>
        <div className="imagesS">
            <img src={caba8} alt="Slide 3" />
        </div>
    </Slider>
  )
}

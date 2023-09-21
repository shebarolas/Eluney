import React from 'react'
import caba2 from "../../imgs/cab2.jpg"
import caba3 from "../../imgs/cab3.jpg"
import caba4 from "../../imgs/cab4.jpg";
import caba6 from "../../imgs/cab6.jpg";
import caba7 from "../../imgs/cab7.jpg";
import caba8 from "../../imgs/cab8.jpg";
import caba9 from "../../imgs/caba9.jpg";
import caba10 from "../../imgs/caba10.jpg";
import caba11 from "../../imgs/caba11.jpg";
import caba12 from "../../imgs/caba12.jpg";
import caba13 from "../../imgs/caba13.jpg";
import Slider from "react-slick";
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
            <img src={caba2} alt="Slide 2" />
        </div>
        <div className="imagesS">
            <img src={caba3} alt="Slide 3" />
        </div>
        <div className="imagesS">
            <img src={caba4} alt="Slide 3" />
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
        <div className="imagesS">
            <img src={caba9} alt="Slide 3" />
        </div>
        <div className="imagesS">
            <img src={caba10} alt="Slide 3" />
        </div>
        <div className="imagesS">
            <img src={caba11} alt="Slide 3" />
        </div>
        <div className="imagesS">
            <img src={caba12} alt="Slide 3" />
        </div>
        <div className="imagesS">
            <img src={caba13} alt="Slide 3" />
        </div>
    </Slider>
  )
}

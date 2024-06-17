import React from 'react'
import Slider from 'react-slick'
import '../../css/index.css'
const SiliderComponent = ({arrImg}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
      };
  return (
    <Slider {...settings} >
           {arrImg.map((image) => {
            return (
                <img src={image} alt="slider" preview={false} className='h-[50%]'/>
            )
           })}
    </Slider>
  )
}

export default SiliderComponent

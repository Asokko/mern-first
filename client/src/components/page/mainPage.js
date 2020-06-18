import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"

export default class LazyLoad extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2
    };
    return (
      <div>
        <h2> Lazy Load</h2>
        <Slider {...settings}>
          <div>
            <img src={"https://static.wixstatic.com/media/61f84d_ff5b1f3a93a14db68de6639b1a890b3d~mv2.jpg/v1/fill/w_736,h_447,al_c,q_90,usm_0.66_1.00_0.01/61f84d_ff5b1f3a93a14db68de6639b1a890b3d~mv2.webp"} />
          </div>
          <div>
            <img src={"https://static.wixstatic.com/media/61f84d_c77fa085975d431aa05069f265179ce3~mv2_d_4592_2576_s_4_2.jpg/v1/fill/w_797,h_447,al_c,q_90,usm_0.66_1.00_0.01/61f84d_c77fa085975d431aa05069f265179ce3~mv2_d_4592_2576_s_4_2.webp"} />
          </div>
          <div>
            <img src={""}/>
          </div>
          <div>
            <img src={""} />
          </div>
        </Slider>
      </div>
    );
  }
}
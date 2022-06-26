import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./CarouselLoop.css";

const CarouselLoop = (props: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 7,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    customPaging: (i: number) => (
      <div className="custom-paging">
      </div>
    ),
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {props.data.womenfashion.map((item: any, index: any) => {
        return (
          <div className="slide-img" key={index}>
              <PrimaryButton></PrimaryButton>
              <img src={item.imageUrl}></img>
          </div>
        );
      })}
    </Slider>
  );
};

export default CarouselLoop;

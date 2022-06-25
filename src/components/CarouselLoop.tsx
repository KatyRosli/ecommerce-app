import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PrimaryButton from "./PrimaryButton";
import "./CarouselLoop.module.css";

const CarouselLoop = (props: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 7,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    customPaging: (i: number) => (
      <div
        style={{
          width: "40px",
          height: "10px",
          margin: "20px 0 0 0",
          padding: "0 10px 0 10px",
          backgroundColor: "#FBF8F1",
          border: "3px #262623 solid"
        }}
      >
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
          <div className={"slide-img"} key={index}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                flexDirection: "column-reverse",
                flexWrap: "nowrap",
              }}
            >
              <PrimaryButton></PrimaryButton>
              <img src={item.imageUrl}></img>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default CarouselLoop;

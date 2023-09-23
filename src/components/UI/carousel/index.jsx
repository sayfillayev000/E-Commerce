import React, { useState } from "react";
import _Slide from "../../fields/slide";
const Index = ({ Slider }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevClick = () => {
    setCurrentIndex(currentIndex === 0 ? Slider.length - 1 : currentIndex - 1);
  };

  const nextClick = () => {
    setCurrentIndex(currentIndex === Slider.length - 1 ? 0 : currentIndex + 1);
  };

  const indicatorClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <>
      <div className="carousel">
        {/* Carousel block  */}
        <div
          id="carouselAd"
          className="carousel slide"
          data-bs-ride="false"
          data-bs-pause="hover"
        >
          {/* <!-- Wrapper -->  */}
          <div className="carousel-inner">
            {Slider.map((slide, index) => (
              <_Slide
                image={slide}
                key={index}
                className={`carousel-item ${index === currentIndex ? "active" : ""}`}
              />
            ))}
          </div>
          {/* <!-- Controls -->  */}
          <div
            className="carousel-control-prev prev"
            data-bs-target="#carouselAd"
            data-bs-slide="prev"
            onClick={prevClick}
          >
            <i className="fa fa-angle-left"></i>
            <span className="visually-hidden">Previous</span>
          </div>
          <div
            className="carousel-control-next next"
            data-bs-target="#carouselAd"
            data-bs-slide="next"
            onClick={nextClick}
          >
            <i className="fa fa-angle-right"></i>
            <span className="visually-hidden">Next</span>
          </div>
          {/* <!-- Controls end -->*/}
        </div>
        {/* <!-- Indicators --> */}
        <div className="indicators">
          {Slider.map((_, index) => (
            <div
              data-bs-target="#carouselAd"
              data-bs-slide-to={index.toString()}
              onClick={() => indicatorClick(index)}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              aria-current={index === currentIndex ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              key={index}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;

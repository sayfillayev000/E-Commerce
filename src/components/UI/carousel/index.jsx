import React, { useState, useEffect } from 'react';
// import '../../../assets/styles/components/_carousel.scss';
import Slide from '../../fields/slide';
import { Slider } from '../../../assets/images/png';

const index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(Slider.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextClick = () => {
    if (currentIndex === Slider.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const indicatorClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    // Your effect code here
  }, [currentIndex]);

  return (
    <div className="carousel">
      <div className="carousel_row">
          <Slide
            className={`${index === currentIndex ? 'active' : ''}`}
            image={Slider[currentIndex]}
            key={index}
          />
      </div>

      <div className="prev" onClick={prevClick}>
        <i className="fa fa-angle-left"></i>
      </div>
      <div className="next" onClick={nextClick}>
        <i className="fa fa-angle-right"></i>
      </div>
      <div className="indicators">
        {Slider.map((_, index) => (
          <div
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => indicatorClick(index)}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default index;

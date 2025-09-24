import { useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { sliderData } from './slider-data';
import "./Slider.scss";

const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const slideLength = sliderData.length;
  const autoScroll = true;
  let slideInterval;
  const intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlider(currentSlider === slideLength - 1 ? 0 : currentSlider + 1);
  };

  const previousSlide = () => {
    setCurrentSlider(currentSlider === 0 ? slideLength - 1 : currentSlider - 1);
  };

  useEffect(() => {
    const auto = () => {
      slideInterval = setInterval(nextSlide, intervalTime);
    };

    if (autoScroll) {
      auto();
    }

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlider ,autoScroll, intervalTime, nextSlide]);

  return (
    <div className='slider'>
      <AiOutlineArrowLeft className='arrow prev' onClick={previousSlide}/>
      <AiOutlineArrowRight className='arrow next' onClick={nextSlide}/>

      {sliderData.map((slide, index) => (
        <div key={index} className={index === currentSlider ? "slide current" : "slide"}>
          {index === currentSlider && (
            <>
              <img src={slide.image} alt="slide"/>
              <div className='content'>
                <h2>{slide.heading}</h2>
                <p>{slide.desc}</p>
                <hr/>
                <a href="#product" className="--btn --btn-primary">Shop Now</a>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slider;

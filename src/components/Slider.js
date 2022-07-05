import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "/Users/ajibolaokungbaye/tender-landing-page-v2/src/components/SliderData.js";

function Slider() {
  const [counter, setCounter] = useState(0);
  const { image, name, title } = data[counter];

  const checkCounter = (number) => {
    if (number > data.length - 1) {
      return 0;
    }

    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };

  const handleNext = () => {
    setCounter((counter) => {
      let newIndex = counter + 1;
      return checkCounter(newIndex);
    });
  };

  // const load = () => {
  //   const change = setInterval(handleNext, 3000);
  //   return () => clearInterval(change);
  // };

  // useEffect(load);

  const handlePrevious = () => {
    setCounter((counter) => {
      let newIndex = counter - 1;
      return checkCounter(newIndex);
    });
  };

  //   const randomPerson = () => {
  //     let randomNumber = Math.floor(Math.random() * data.length);
  //     if (randomNumber === counter) {
  //       randomNumber = counter + 1;
  //     }
  //     setCounter(checkCounter(randomNumber));
  //   };

  return (
    <>
      <section className="slider-holder">
        <div className="slide-left slider" onClick={handlePrevious}>
          <FiChevronLeft />
        </div>
        <div className="testimonial">
          <img src={image} alt="" />
          <h1>{name}</h1>
          <p>{title}</p>
        </div>
        <div className="slide-right slider" onClick={handleNext}>
          <FiChevronRight />
        </div>
      </section>
    </>
  );
}

export default Slider;

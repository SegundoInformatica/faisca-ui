"use client";

import { useState } from "react";
import "./Carousel.css";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Carousel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPreviousIndex = () =>
    setCurrentIndex(
      currentIndex === 0 ? children.length - 1 : currentIndex - 1,
    );

  const goNextIndex = () =>
    setCurrentIndex(
      currentIndex === children.length - 1 ? 0 : currentIndex + 1,
    );

  return (
    <div>
      <div className="carousel__wrapper">
        <div
          className="carousel__slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children}
        </div>

        <div className="carousel__prev-next">
          <button onClick={goPreviousIndex}>
            <IoIosArrowBack size={30} />
          </button>

          <button onClick={goNextIndex}>
            <IoIosArrowForward size={30} />
          </button>
        </div>
      </div>

      <div className="carousel__controler">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`carousel__button ${currentIndex === index && "active"}`}
          />
        ))}
      </div>
    </div>
  );
}

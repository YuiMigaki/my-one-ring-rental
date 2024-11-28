"use client";
import React from "react";
import { useState } from "react";
import { slides } from "../../data/main-slider-list";
import { controls } from "../../data/main-slider-list";


// This is the slider components for index page
const SlideList = () => {
  // This line initialises the state which is set to 0.The index = The current state value. setIndex = a function to update that state.
  const [index, setIndex] = useState(0);

  // This is incrementing the index state by one each time the dropdown selection changes and setIndex will be updated.
  function handleClick() {
    setIndex((index + 1) % controls.length);
    console.log("Updated index: " + index);
  };
  
  return (
    <>
      <div className="carousel-inner" role="listbox">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={slide.class}
            id={slide.id}
            style={{
              background:
                "url(https://placehold.it/1920x605) no-repeat left center",
              backgroundSize: "cover",
            }}
          >
            <div className="carousel-caption">
              <div className="caption sfr slider-title">
                {slide.sliderTitle}
              </div>
              <div className="caption sfl slider-subtitle">
                {slide.sliderSubtitle}
              </div>
              <a href="/" className="caption sfb btn btn-default btn-lg">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      <div id="home-search-section"></div>

      {controls.map((control) => (
        <a
          key={control.id}
          className={control.class}
          href="#carousel-example-generic"
          role="button"
          data-slide={control.data}
          onClick={handleClick}
        >
          <span className={control.span}></span>
          <span className="sr-only">{control.title}</span>
        </a>
      ))}
    </>
  );
};

export default SlideList;

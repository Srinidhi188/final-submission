import React, { useState, useEffect, useRef } from "react";
import "../styles/slider.css";
import img1 from "../assets/images/gallery-01.jpg";
import img2 from "../assets/images/gallery-02.jpg";
import img3 from "../assets/images/gallery-03.jpg";
import img4 from "../assets/images/gallery-04.jpg";
import img5 from "../assets/images/gallery-05.jpg";
import img6 from "../assets/images/gallery-06.jpg";

function Slider() {
  const images = [img1, img2, img3, img4, img5, img6];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // Simulate the automatic sliding behavior
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Update the transform property of the slide container
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentIndex * 100
        }%)`;
    }
  }, [currentIndex]);
  return (
    <div className="container">
      <div className="slide">
        <div className="item" style={{ backgroundImage: `url(${img1})`  }}>
          <div className="content">
            <div className="name">Fiery-throated hummingbird</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${img2})` }}>
          <div className="content">
            <div className="name">Golden-browed chlorophonia</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage:`url(${img3})` }}>
          <div className="content">
            <div className="name">Pale blue flycatcher</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${img4})` }}>
          <div className="content">
            <div className="name">Madagascar hoopoe</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${img5})` }}>
          <div className="content">
            <div className="name">Blue jay</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${img6})` }}>
          <div className="content">
            <div className="name">Baltimore Oriole Birds</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
      </div>
      <div className="button">
        <button className="prev"><i className="fa-solid fa-arrow-left"></i></button>
        <button className="next"><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
}

export default Slider;
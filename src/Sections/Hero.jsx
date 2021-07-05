import React, { useEffect } from "react";
import { ScrollTo } from '../components/functionality';
import Navigation from "../components/navigation";

import hero from "../img/hero.png";


function Hero() {
  useEffect(() => {
    ScrollTo();
  });

  return (
    <header className="header">
      <Navigation />
      <div className="header__title">
        <h1>
          When
          <span className="highlight">banking</span>
          meets
          <br />
          <span className="highlight">minimalist</span>
        </h1>
        <h4>A simpler banking experience for a simpler life.</h4>
        <button className="btn--text btn--scroll-to">Learn more &darr;</button>
        <img src={hero} className="header__img" alt="Minimalist bank items" />
      </div>
    </header>
  );
}

export default Hero;

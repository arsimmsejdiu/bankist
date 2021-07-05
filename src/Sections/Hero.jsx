import React, { useEffect } from "react";
import hero from "../img/hero.png";
import Navigation from "../components/navigation";

function Hero() {
  useEffect(() => {
    const btnScrollTo = document.querySelector(".btn--scroll-to");
    const section1 = document.querySelector("#Features");

    btnScrollTo.addEventListener("click", function (e) {
      const s1coords = section1.getBoundingClientRect();
      console.log(s1coords);

      console.log(e.target.getBoundingClientRect());

      console.log(
        "Current scroll (X/Y)",
        window.pageXOffset,
        window.pageYOffset
      );

      console.log(
        "height/width viewport",
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
      );

      section1.scrollIntoView({ behavior: "smooth" });
    });
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

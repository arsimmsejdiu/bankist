import React, { useEffect } from "react";
import logo from "../img/logo.png";

function Navigation() {
  useEffect(() => {
    const nav = document.querySelector(".nav");

    const handleHover = function (e) {
      if (e.target.classList.contains("nav__link")) {
        const link = e.target;
        const siblings = link.closest(".nav").querySelectorAll(".nav__link");
        const logo = link.closest(".nav").querySelector("img");

        siblings.forEach((el) => {
          if (el !== link) el.style.opacity = this;
        });
        logo.style.opacity = this;
      }
    };

    // Passing "argument" into handler
    nav.addEventListener("mouseover", handleHover.bind(0.5));
    nav.addEventListener("mouseout", handleHover.bind(1));

    const header = document.querySelector(".header");
    const navHeight = nav.getBoundingClientRect().height;

    const stickyNav = function (entries) {
      const [entry] = entries;
      // console.log(entry);

      if (!entry.isIntersecting) nav.classList.add("sticky");
      else nav.classList.remove("sticky");
    };

    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    });

    headerObserver.observe(header);
  });

  return (
    <nav className="nav">
      <img
        src={logo}
        alt="Bankist logo"
        className="nav__logo"
        id="logo"
        designer="Jonas"
        data-version-number="3.0"
      />
      <ul className="nav__links">
        <li className="nav__item">
          <a className="nav__link" href="#Features">
            Features
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#section--2">
            Operations
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#section--3">
            Testimonials
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link nav__link--btn btn--show-modal" href="/">
            Open account
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

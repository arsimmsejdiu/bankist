import React, { useEffect } from "react";
import { StickyNav } from "./functionality";
import { navItem } from "../data/data";

import logo from "../img/logo.png";

function Navigation() {
  useEffect(() => {
    StickyNav();
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
        {navItem.map((item) => (
          <li key={item.id} className="nav__item">
            <a className="nav__link" href={item.href}>
              {item.navName}
            </a>
          </li>
        ))}
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

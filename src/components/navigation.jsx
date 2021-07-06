import React, { useEffect } from "react";
import { StickyNav } from "./functionality";
import { navItem } from "../data/data";

import logo from "../img/logo.png";
import { motion } from "framer-motion";

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
            <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="nav__link" href={item.href}>
              {item.navName}
            </motion.a>
          </li>
        ))}
        <li className="nav__item">
          <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="nav__link nav__link--btn btn--show-modal" href="/">
            Open account
          </motion.a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

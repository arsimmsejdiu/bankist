import React from "react";
import { footerItem } from "../data/data";

import logo from "../img/icon.png";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__nav">
        {footerItem.map((item) => (
          <li key={item.id} className="footer__item">
            <a className="footer__link" href="/">
              {item.navName}
            </a>
          </li>
        ))}
      </ul>
      <img src={logo} alt="Logo" className="footer__logo" />
      <p className="footer__copyright">
        &copy; {new Date().getFullYear()} Copyright by
        <a className="footer__link twitter-link" href="/">
          Arsim Sejdiu
        </a>
      </p>
    </footer>
  );
}

export default Footer;

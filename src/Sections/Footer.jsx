import React from "react";
import logo from "../img/icon.png";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__nav">
        <li className="footer__item">
          <a className="footer__link" href="/">
            About
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="/">
            Pricing
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="/">
            Terms of Use
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="/">
            Privacy Policy
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="/">
            Careers
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="/">
            Blog
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="/">
            Contact Us
          </a>
        </li>
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

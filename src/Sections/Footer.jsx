import React from "react";
import logo from "../img/icon.png";

function Footer() {
  return (
    <footer class="footer">
      <ul class="footer__nav">
        <li class="footer__item">
          <a class="footer__link" href="/">
            About
          </a>
        </li>
        <li class="footer__item">
          <a class="footer__link" href="/">
            Pricing
          </a>
        </li>
        <li class="footer__item">
          <a class="footer__link" href="/">
            Terms of Use
          </a>
        </li>
        <li class="footer__item">
          <a class="footer__link" href="/">
            Privacy Policy
          </a>
        </li>
        <li class="footer__item">
          <a class="footer__link" href="/">
            Careers
          </a>
        </li>
        <li class="footer__item">
          <a class="footer__link" href="/">
            Blog
          </a>
        </li>
        <li class="footer__item">
          <a class="footer__link" href="/">
            Contact Us
          </a>
        </li>
      </ul>
      <img src={logo} alt="Logo" class="footer__logo" />
      <p class="footer__copyright">
        &copy; {new Date().getFullYear()} Copyright by
        <a class="footer__link twitter-link" href="/">
          Arsim Sejdiu
        </a>
      </p>
    </footer>
  );
}

export default Footer;

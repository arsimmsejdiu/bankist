import React, { useEffect } from "react";

import { Upload, Home, User } from "../components/svg";

function Operations() {
  useEffect(() => {
    const tabs = document.querySelectorAll(".operations__tab");
    const tabsContainer = document.querySelector(".operations__tab-container");
    const tabsContent = document.querySelectorAll(".operations__content");

    tabsContainer.addEventListener("click", function (e) {
      const clicked = e.target.closest(".operations__tab");

      // Guard clause
      if (!clicked) return;

      // Remove active classes
      tabs.forEach((t) => t.classList.remove("operations__tab--active"));
      tabsContent.forEach((c) =>
        c.classList.remove("operations__content--active")
      );

      // Activate tab
      clicked.classList.add("operations__tab--active");

      // Activate content area
      document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add("operations__content--active");
    });
  });

  return (
    <section className="section" id="section--2">
      <div className="section__title">
        <h2 className="section__description">Operations</h2>
        <h3 className="section__header">
          Everything as simple as possible, but no simpler.
        </h3>
      </div>

      <div className="operations">
        <div className="operations__tab-container">
          <button
            className="btn operations__tab operations__tab--1 operations__tab--active"
            data-tab="1"
          >
            <span>01</span>Instant Transfers
          </button>
          <button className="btn operations__tab operations__tab--2" data-tab="2">
            <span>02</span>Instant Loans
          </button>
          <button className="btn operations__tab operations__tab--3" data-tab="3">
            <span>03</span>Instant Closing
          </button>
        </div>
        <div className="operations__content operations__content--1 operations__content--active">
          <div className="operations__icon operations__icon--1">
            <Upload />
          </div>
          <h5 className="operations__header">
            Tranfser money to anyone, instantly! No fees, no BS.
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="operations__content operations__content--2">
          <div className="operations__icon operations__icon--2">
            <Home />
          </div>
          <h5 className="operations__header">
            Buy a home or make your dreams come true, with instant loans.
          </h5>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div className="operations__content operations__content--3">
          <div className="operations__icon operations__icon--3">
            <User />
          </div>
          <h5 className="operations__header">
            No longer need your account? No problem! Close it instantly.
          </h5>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Operations;

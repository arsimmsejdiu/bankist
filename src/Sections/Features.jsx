import React from "react";

import digitalLazy from "../img/digital-lazy.jpg";
import digital from "../img/digital.jpg";
import growLazy from "../img/grow-lazy.jpg";
import grow from "../img/grow.jpg";
import cardLazy from "../img/card-lazy.jpg";
import card from "../img/card.jpg";
import monitor from '../img/monitor.svg';
import profit from '../img/profits.svg';
import credit from "../img/credit-card.svg";

function Features() {
  return (
    <section class="section" id="Features">
      <div class="section__title">
        <h2 class="section__description">Features</h2>
        <h3 class="section__header">
          Everything you need in a modern bank and more.
        </h3>
      </div>

      <div class="features">
        <img
          src={digitalLazy}
          data-src={digital}
          alt="Computer"
          class="features__img lazy-img"
        />
        <div class="features__feature">
          <div class="features__icon">
            <img src={monitor} alt="monitor"/>
          </div>
          <h5 class="features__header">100% digital bank</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
            sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
            debitis ducimus.
          </p>
        </div>

        <div class="features__feature">
          <div class="features__icon">
          <img src={profit} alt="profit"/>
          </div>
          <h5 class="features__header">Watch your money grow</h5>
          <p>
            Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
            inventore ab? Nulla incidunt eius numquam sequi iste pariatur
            quibusdam!
          </p>
        </div>
        <img
          src={growLazy}
          data-src={grow}
          alt="Credit card"
          class="features__img lazy-img"
        />

        <img
          src={cardLazy}
          data-src={card}
          alt="Credit card"
          class="features__img lazy-img"
        />
        <div class="features__feature">
          <div class="features__icon">
            <img src={credit} alt="Credit Card"/>
          </div>
          <h5 class="features__header">Free debit card included</h5>
          <p>
            Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
            eveniet consequatur odit quam quos possimus assumenda dicta fuga
            inventore ab.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;

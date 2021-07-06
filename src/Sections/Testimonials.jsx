import React, { useEffect } from "react";

import { Slider } from "../components/functionality";
import { testimonialItem } from "../data/data";

function Testimonials() {
  useEffect(() => {
    Slider();
  });

  return (
    <section className="section" id="testimonials">
      <div className="section__title section__title--testimonials">
        <h2 className="section__description">Not sure yet?</h2>
        <h3 className="section__header">
          Millions of Bankists are already making their lifes simpler.
        </h3>
      </div>

      <div className="slider">
        {testimonialItem.map((item) => (
          <div className="slide" key={item.id}>
            <div className="testimonial">
              <h5 className="testimonial__header">{item.title}</h5>
              <blockquote className="testimonial__text">
                {item.description}
              </blockquote>
              <address className="testimonial__author">
                <img
                  src={item.imgSrc}
                  alt={item.altText}
                  className="testimonial__photo"
                />
                <h6 className="testimonial__name">{item.name}</h6>
                <p className="testimonial__location">{item.place}</p>
              </address>
            </div>
          </div>
        ))}

        <button className="slider__btn slider__btn--left">&larr;</button>
        <button className="slider__btn slider__btn--right">&rarr;</button>
        <div className="dots"></div>
      </div>
    </section>
  );
}

export default Testimonials;

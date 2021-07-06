import { motion } from "framer-motion";
import React from "react";

function SignMeUp() {
  return (
    <section className="section section--sign-up">
      <div className="section__title">
        <h3 className="section__header">
          The best day to join Bankist was one year ago. The second best is
          today!
        </h3>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="btn btn--show-modal"
      >
        Open your free account today!
      </motion.button>
    </section>
  );
}

export default SignMeUp;

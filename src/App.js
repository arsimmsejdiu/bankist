import React, { useEffect } from "react";
import { RevealImage } from "./components/functionality";

import "./styles/app.css";
import Hero from "./Sections/Hero";
import Features from "./Sections/Features";
import Operations from "./Sections/Operations";
import Testimonials from "./Sections/Testimonials";
import SignMeUp from "./Sections/SignMeUp";
import Footer from "./Sections/Footer";
import Modal from "./components/modal";

function App() {
  useEffect(() => {
    RevealImage();
  });

  return (
    <header>
      <Hero />
      <Features />
      <Operations />
      <Testimonials />
      <SignMeUp />
      <Footer />
      <Modal />
    </header>
  );
}

export default App;

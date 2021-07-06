import React, { useEffect } from "react";
import { RevealImage } from "./components/functionality";
import { Route , Switch } from 'react-router-dom';

import "./styles/app.css";
import "./styles/style.css";

import Hero from "./Sections/Hero";
import Features from "./Sections/Features";
import Operations from "./Sections/Operations";
import Testimonials from "./Sections/Testimonials";
import SignMeUp from "./Sections/SignMeUp";
import Footer from "./Sections/Footer";
import Modal from "./components/modal";

import Account from "./Page/Account.page";

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
      <Switch >
        <Route exact path="/account" render={() => <Account />} />
      </Switch>
    </header>
  );
}

export default App;

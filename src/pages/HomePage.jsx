import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Team from "../components/Team";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Stats from "../components/Stats";
import About from "../components/About";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Stats />
      <Team />
      <Gallery />
      <Footer />
    </div>
  );
};

export default HomePage;

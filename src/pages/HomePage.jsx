import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Team from "../components/Team";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Stats from "../components/Stats";
import About from "../components/About";
import HeroTwo from "../components/HeroTwo";
import Navbar from "../components/Navbar";
import AppLayout from "../layout/AppLayout";

const HomePage = () => {
  const bgtransparent = true;
  return (
    <AppLayout>
    <div className="bg-cover h-screen bg-center bg-[url('../images/esc1.jpg')]">
      
      <div className="herocover">
      <Navbar bgtransparent={bgtransparent} />
      <HeroTwo/>
      {/* <Hero /> */}
      
      <About />
      <Services />
      <Stats />
      <Team />
      <Gallery />
      <Footer />
      </div>
      
    </div>
    </AppLayout>
  );
};

export default HomePage;

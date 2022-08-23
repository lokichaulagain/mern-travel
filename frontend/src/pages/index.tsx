import React from "react";
import AboutSection from "../components/AboutSection";
import CardCarousel from "../components/CardCarousel";
import HeroCarousel from "../components/HeroCarousel";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <HeroCarousel />
      {/* <CardCarousel /> */}

      <AboutSection />
    </div>
  );
};

export default Home;

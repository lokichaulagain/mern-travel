import React from "react";
import AboutSection from "../components/AboutSection";
import CardCarousel from "../components/CardCarousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

import TopService from "../components/TopService";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      {/* <HeroCarousel /> */}
      {/* <CardCarousel /> */}
      <AboutSection />
      <TopService />
      <NewsLetter />
      <Footer />
      <CardCarousel />
    </div>
  );
};

export default Home;

import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HomeAboutSection from "../components/home/HomeAboutSection";
import HomeTopService from "../components/home/HomeTopService";
import HomeNewsLetter from "../components/home/HomeNewsLetter";
import styles from "../styles/scss/Home.module.scss";
import HomeHoverCard from "../components/home/HomeHoverCard";
import HomeSection1 from "../components/home/HomeSection1";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className={`${styles.pageWrapper}`}>
      <Navbar />
      <Hero />
      <HomeSection1 />
      <HomeAboutSection />
      <HomeHoverCard />
      <HomeTopService />
      <HomeNewsLetter />
      <Footer />
    </div>
  );
};

export default Home;

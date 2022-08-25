import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HomeAboutSection from "../components/home/HomeAboutSection";
import HomeTopService from "../components/home/HomeTopService";
import HomeNewsLetter from "../components/home/HomeNewsLetter";
import styles from "../styles/scss/Home.module.scss";
import HomeHoverCard from "../components/home/HomeHoverCard";

const Home = () => {
  return (
    <div className={`${styles.pageWrapper}`}>
      <Navbar />
      <HomeAboutSection />
      {/* style="width: 18rem;" */}

      <div className="container-fluid">
        <HomeHoverCard/>
      </div>
     
      <HomeTopService />
      <HomeNewsLetter />
      <Footer />
    </div>
  );
};

export default Home;

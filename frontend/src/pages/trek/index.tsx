import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import TreksContactusCard from "../../components/Treks/TreksContactusCard";
import TreksServiceCard from "../../components/Treks/TreksServiceCard";
import styles from "../../styles/scss/Treks.module.scss";
import HeroComponent from "../../components/HeroComponent";
import TreksCardSection from "../../components/Treks/TreksCardSection";
import CenterImageSection from "../../components/CenterImageSection";

function Trek() {
  return (
    <div className={`${styles.pageWrapper}`}>
      <Navbar />
      <HeroComponent />
      <TreksCardSection />
      <CenterImageSection/>
      <TreksContactusCard />
      <TreksServiceCard />
      <Footer />
    </div>
  );
}

export default Trek;

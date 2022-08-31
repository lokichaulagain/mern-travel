import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import TreksContactusCard from "../../components/Treks/TreksContactusCard";
import TreksServiceCard from "../../components/Treks/TreksServiceCard";
import TreksCard from "../../components/Treks/TreksCard";
import styles from "../../styles/scss/Treks.module.scss";
import HeroComponent from "../../components/HeroComponent";
import TreksCategoryNavbar from "../../components/Treks/TreksCategoryNavbar";

function Trek() {
  return (
    <div className={`${styles.pageWrapper}`}>
      <Navbar />
      <HeroComponent />
      <TreksCard />
      <TreksContactusCard />
      <TreksServiceCard />
      <Footer />
    </div>
  );
}

export default Trek;

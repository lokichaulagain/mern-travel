import React from "react";
import Footer from "../components/Footer";
import HeroComponent from "../components/HeroComponent";
import Navbar from "../components/Navbar";
import SingleTrekCenterContent from "../components/SingleTrek/singleTrekCenterContent";
import SingleTrekComponent1 from "../components/SingleTrek/SingleTrekComponent1";
import styles from "../styles/scss/SingleTrek.module.scss";

export default function singleTrek() {
  return (
    <div>
      <Navbar />
      <div className={`${styles.centerImg} centerImage`}>
        <HeroComponent />
      </div>
      <SingleTrekComponent1 />
      <div className={`${styles.centerImg} centerImage`}>
        <SingleTrekCenterContent />
      </div>

      <Footer />
    </div>
  );
}

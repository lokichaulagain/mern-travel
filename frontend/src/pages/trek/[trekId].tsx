import React from "react";
import Footer from "../../components/Footer";
import HeroComponent from "../../components/HeroComponent";
import Navbar from "../../components/Navbar";
import SingleTrekCenterContent from "../../components/SingleTrek/SingleTrekCenterContent";
import SingleTrekComponent1 from "../../components/SingleTrek/SingleTrekComponent1";
import SingleTrekSection2 from "../../components/SingleTrek/SingleTrekSection2";
import SingleTrekSection3 from "../../components/SingleTrek/SingleTrekSection3";
import styles from "../../styles/scss/SingleTrek.module.scss";

export default function singleTrek() {
  return (
    <div>
      <div className={`${styles.bg}`}>
        <Navbar />
        <HeroComponent />
        <SingleTrekComponent1 />
        <SingleTrekCenterContent />
      </div>
      <SingleTrekSection2 />
      <SingleTrekSection3 />
      <Footer />
    </div>
  );
}

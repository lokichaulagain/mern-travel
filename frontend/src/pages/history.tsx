import React from "react";
import Footer from "../components/Footer";
import HeroComponent from "../components/HeroComponent";
import HistorySection1 from "../components/History/HistorySection1";
import HistorySection2Slider from "../components/History/HistorySection2Slider";
import Navbar from "../components/Navbar";
import styles from "../styles/scss/History.module.scss";

export default function History() {
  return (
    <div>
      <div className={`${styles.bg}`}>
        <Navbar />
        <HeroComponent />
      </div>
      <HistorySection1 />
      <HistorySection2Slider />
      <Footer />
    </div>
  );
}

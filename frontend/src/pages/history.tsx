import React from "react";
import Footer from "../components/Footer";
import HeroComponent from "../components/HeroComponent";
import HistorySection1 from "../components/History/HistorySection1";
import Navbar from "../components/Navbar";
import styles from "../styles/scss/history/History.module.scss";

export default function History() {
  return (
    <div>
      <div className={`${styles.bg}`}>
        <Navbar />
        <HeroComponent />
      </div>
      <HistorySection1 />
      <Footer />
    </div>
  );
}
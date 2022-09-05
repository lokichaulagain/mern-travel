import React from "react";
import CenterImageSection from "../components/CenterImageSection";
import EventCard from "../components/Events/EventCard";
import Footer from "../components/Footer";
import HeroComponent from "../components/HeroComponent";
import Navbar from "../components/Navbar";
import styles from "../styles/scss/Event.module.scss";

function events() {
  return (
    <div className={`${styles.bg}`}>
      <Navbar />
      <HeroComponent />
      <EventCard />
      <CenterImageSection />
      <Footer />
    </div>
  );
}

export default events;

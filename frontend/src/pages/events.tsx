import React from "react";
import EventCard from "../components/EventCard";
import Footer from "../components/Footer";
import HeroComponent from "../components/HeroComponent";
import Navbar from "../components/Navbar";
import styles from "../styles/scss/event/Event.module.scss";

function events() {
  return (
    <div>
      <div className={`${styles.bg}`}>
        <Navbar />
        <HeroComponent />
      </div>
      <EventCard />
      <Footer />
    </div>
  );
}

export default events;

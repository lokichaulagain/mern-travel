import React from "react";
import CenterImageSection from "../components/CenterImageSection";
import EventCard from "../components/Events/EventCard";
import HeroComponent from "../components/HeroComponent";
import styles from "../styles/scss/Event.module.scss";

function events() {
  return (
    <div className={`${styles.bg}`}>
      <HeroComponent />
      <EventCard />
      <CenterImageSection />
    </div>
  );
}

export default events;

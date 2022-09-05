import React from "react";
import Footer from "../components/Footer";
import HeroComponent from "../components/HeroComponent";
import Navbar from "../components/Navbar";
import TeamMemberCard from "../components/Team/TeamMemberCard";
import TreksContactusCard from "../components/Treks/TreksContactusCard";
import TreksServiceCard from "../components/Treks/TreksServiceCard";
import styles from "../styles/scss/Team.module.scss";

export default function Team() {
  return (
    <div>
      <Navbar />
      <div className={` ${styles.pageBg}`}>
        <HeroComponent />
      </div>
      <TeamMemberCard />
      <TreksContactusCard />
      <TreksServiceCard />
      <Footer />
    </div>
  );
}

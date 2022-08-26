import React from "react";
import Footer from "../components/Footer";
import HeroComponent from "../components/HeroComponent";
import Navbar from "../components/Navbar";
import TeamContactusCard from "../components/Team/TeamContactusCard";
import TeamMemberCard from "../components/Team/TeamMemberCard";
import TeamServiceSection from "../components/Team/TeamServiceSection";
import styles from "../styles/scss/Team.module.scss";

export default function Team() {
  return (
    <div>
      <Navbar />
      <div className={` ${styles.pageBg}`}>
        <HeroComponent />
      </div>
      <TeamMemberCard />
      <TeamContactusCard />
      <TeamServiceSection />
      <Footer />
    </div>
  );
}

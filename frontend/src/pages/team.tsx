import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TeamContactusCard from "../components/Team/TeamContactusCard";
import TeamMemberCard from "../components/Team/TeamMemberCard";
import TeamServiceSection from "../components/Team/TeamServiceSection";

export default function Team() {
  return (
    <div>
      <Navbar />
      <TeamMemberCard />
      <TeamContactusCard />
      <TeamServiceSection />
      <Footer />
    </div>
  );
}

import React from "react";
import Footer from "../components/Footer";
import HeroComponent from "../components/HeroComponent";
import HistoryComponent1 from "../components/History/HistoryComponent1";
import Navbar from "../components/Navbar";

export default function History() {
  return (
    <div>
      <Navbar />
      <HeroComponent />
      <HistoryComponent1/>

      <Footer />
    </div>
  );
}

import React from "react";
import EventCard from "../components/EventCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


function events() {
  return (
    <div>
      <Navbar />
      <EventCard />
      <Footer />
    </div>
  );
}

export default events;

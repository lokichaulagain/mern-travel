import React from "react";
import Contactform from "../components/Contactform";
import Footer from "../components/Footer";
import Maps from "../components/Maps";
import Navbar from "../components/Navbar";

const contact = () => {
  return (
    <div>
      <Navbar />
      <Maps />
      <Contactform />
      <Footer />
    </div>
  );
};

export default contact;

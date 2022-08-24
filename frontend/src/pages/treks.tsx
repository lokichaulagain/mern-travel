import React from "react";
import TreksCard from "../components/TreksCard";
import TreksCategoryNav from "../components/TreksCategoryNav";

function treks() {
  return (
    <div>
      <TreksCategoryNav />
      <TreksCard/>
    </div>
  );
}

export default treks;

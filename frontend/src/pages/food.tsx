import React from "react";
import Foodinfo from "../components/Food/Foodinfo";
import Tabs from "../components/Food/Tabs";
import Organic from "../components/Food/Organic";
import Pagehero from "../components/Pagehero";

const food = () => {
  return (
    <div>
      <Pagehero title="Food" />
      <Foodinfo />
      <Tabs />
      <Organic />
      <Tabs />
    </div>
  );
};

export default food;

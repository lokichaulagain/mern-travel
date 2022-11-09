import React from "react";
import Header from "../../components/Header";
import { FoodContextProvider } from "../../../context/FoodContext";
import FoodSection2Table from "../../food/FoodSection2Table";
import FoodSection3Table from "../../food/FoodSection3Table";

function Food() {
  return (
    <FoodContextProvider>
      <Header pageTitle={"Food Page"} />
      <FoodSection2Table />
      <FoodSection3Table />
    </FoodContextProvider>
  );
}

export default Food;

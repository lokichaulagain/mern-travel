import React from "react";
import Header from "../../components/Header";
import { ShelterContextProvider } from "../../../context/ShelterContext";
import Section2Table from "../../components/shelter/Section2Table";
import Section3Table from "../../components/shelter/Section3Table";

function Shelter() {
  return (
    <ShelterContextProvider>
      <Header pageTitle={"Shelter Page"} />
      <Section2Table />
      <Section3Table />
    </ShelterContextProvider>
  );
}

export default Shelter;

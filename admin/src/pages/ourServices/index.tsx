import React from "react";
import Header from "../../components/Header";
import OurServicesTable from "../../components/ourServices/OurServicesTable";
import { OurServicesContextProvider } from "../../../context/OurServicesContext";

function Portfolio() {
  return (
    <OurServicesContextProvider>
      <Header pageTitle={"services"} />
      <OurServicesTable />
    </OurServicesContextProvider>
  );
}

export default Portfolio;

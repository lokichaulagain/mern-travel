import React from "react";
import Header from "../../components/Header";
import OurApproachTable from "../../components/ourServices/OurApproachTable";
import OurServicesTable from "../../components/ourServices/OurServicesTable";

function Portfolio() {
  return (
    <>
      <Header pageTitle={"services"} />
      <OurServicesTable />
      <OurApproachTable />
    </>
  );
}

export default Portfolio;

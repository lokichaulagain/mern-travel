import React from "react";
import Header from "../../components/Header";
import OurClientTable from "../../components/portfolio/OurClientTable";
import OurPortfolioTable from "../../components/portfolio/OurPortfolioTable";

function Portfolio() {
  return (
    <>
      <Header pageTitle={"portfolio"} />
      <OurClientTable />
      <OurPortfolioTable />
    </>
  );
}

export default Portfolio;

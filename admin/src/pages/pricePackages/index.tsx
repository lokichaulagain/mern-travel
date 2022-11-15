import React from "react";
import Header from "../../components/Header";
import { PricePackageContextProvider } from "../../../context/PricePackageContext";
import PricePackageTable from "../../components/pricePackages/PricePackageTable";

function PricePackages() {
  return (
    <PricePackageContextProvider>
      <Header pageTitle={"Price Package Page"} />
      <PricePackageTable />
    </PricePackageContextProvider>
  );
}

export default PricePackages;

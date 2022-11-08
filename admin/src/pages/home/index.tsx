import React from "react";
import Header from "../../components/Header";
import Section5Table from "../../components/home/Section5Table";
import OurApproachTable from "../../components/ourServices/OurApproachTable";
import {HomeContextProvider} from "../../../context/HomeContext"

function Home() {
  return (
    <HomeContextProvider>
      <Header pageTitle={"Home Page"} />
      <Section5Table />
      <OurApproachTable />
    </HomeContextProvider>
  );
}

export default Home;

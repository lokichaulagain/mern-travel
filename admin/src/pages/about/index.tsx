import React from "react";
import AboutTable from "../../components/about/AboutTable";
import TeamTable from "../../components/about/TeamTable";
import Header from "../../components/Header";

function About() {
  return (
    <>
     <Header pageTitle={"about"}/>
      <AboutTable />
      <TeamTable />
    </>
  );
}

export default About;

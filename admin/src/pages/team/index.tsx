import React from "react";
import Header from "../../components/Header";
import { TeamContextProvider } from "../../../context/TeamContext";
import TeamMemberTable from "../../components/team/TeamMemberTable";

function Team() {
  return (
    <TeamContextProvider>
      <Header pageTitle={"Team Page"} />
      <TeamMemberTable />
    </TeamContextProvider>
  );
}

export default Team;

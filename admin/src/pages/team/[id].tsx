import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import SingleRowTableItem from "../../components/SingleRowTableItem";
import { TeamContext, TeamContextProvider } from "../../../context/TeamContext";

const TeamId = () => {
  const { fetchTeamDataById, singleData } = useContext(TeamContext);
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    fetchTeamDataById(id);
  }, [id]);

  return (
    <TeamContextProvider>
    <div className="row customCard">
      <h4>Heading Here </h4>
      <SingleRowTableItem name={"Name"} value={singleData.name} />
      <SingleRowTableItem name={"Profile Picture"} value={singleData.profilePicture} />
      <SingleRowTableItem name={"Position"} value={singleData.position} />
      <SingleRowTableItem name={"Description"} value={singleData.description} />
    </div>
    </TeamContextProvider>
  );
};

export default TeamId;

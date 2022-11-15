import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import SingleRowTableItem from "../../components/SingleRowTableItem";
import { OurServicesContext } from "../../../context/OurServicesContext";

const Id = () => {
  const { fetchSingleService,singleData, } = useContext(OurServicesContext);
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    fetchSingleService(id);
  }, [id]);

  return (
    <div className="row customCard">
      <h4>Heading Here </h4>
      <SingleRowTableItem name={"Icon"} value={singleData.icon} />
      <SingleRowTableItem name={"Title"} value={singleData.title} />
      <SingleRowTableItem name={"Description"} value={singleData.description} />
    </div>
  );
};

export default Id;

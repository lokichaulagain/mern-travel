import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import OurServicesTable from "../../components/ourServices/OurServicesTable";
import axios from "axios";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";

function Portfolio() {
  const { deleteSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);

  const deleteService = async (id: any) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/service/" + id);
      setIsUpdated(1);
      deleteSuccess();
      console.log("Review deleted success");
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  const [services, setServices] = useState([]);
  const fetchAllService = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/service");
      setServices(res.data);
      setIsUpdated(0);
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  useEffect(() => {
    fetchAllService();
  }, [isUpdated]);

  return (
    <>
      <Header pageTitle={"Our Services"} />
      <OurServicesTable
        services={services}
        deleteService={deleteService}
        setIsUpdated={setIsUpdated}
      />
    </>
  );
}

export default Portfolio;

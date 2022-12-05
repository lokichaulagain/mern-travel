import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import StandardTable from "../../components/standard/StandardTable";
import axios from "axios";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";

function Standard() {
  const { deleteSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);

  const deleteStandard = async (id: any) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/standard/" + id);
      setIsUpdated(1);
      deleteSuccess();
      console.log("Standard deleted success");
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  const [standards, setStandards] = useState([]);
  const fetchAllStandard = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/standard");
      setStandards(res.data);
      setIsUpdated(0);
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  useEffect(() => {
    fetchAllStandard();
  }, [isUpdated]);

  return (
    <>
      <Header pageTitle={"Standards"} />
      <StandardTable
        standards={standards}
        deleteStandard={deleteStandard}
        setIsUpdated={setIsUpdated}
      />
    </>
  );
}

export default Standard;

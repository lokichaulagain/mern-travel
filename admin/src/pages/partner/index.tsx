import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import PartnerTable from "../../components/PartnerTable";
import axios from "axios";

function Partner() {
  const [partners, setPartners] = useState([]);
  const [isUpdated, setIsUpdated] = useState(0);

  const fetchAllPartner = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/partner");
      setPartners(res.data);
      setIsUpdated(0);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePartner = async (id: any) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/partner/" + id);
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllPartner();
  }, [isUpdated]);

  return (
    <>
      <Header pageTitle={"Partners"} />
      <PartnerTable
        deletePartner={deletePartner}
        partners={partners}
        setIsUpdated={setIsUpdated}
      />
    </>
  );
}

export default Partner;

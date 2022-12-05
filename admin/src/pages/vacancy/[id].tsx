import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import EditVacancyTable from "../../components/vacancy/EditVacancyTable";

const Id = () => {
  const [isUpdated, setIsUpdated] = useState(0);
  const router = useRouter();
  const id = router.query.id;

  const [singleVacancy, setSingleVacancy] = useState({});
  const fetchSingleVacancy = async (id: any) => {
    try {
      const res = await axios.get(`http://localhost:4000/api/vacancy/${id}`);
      setSingleVacancy(res.data);
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleVacancy(id);
  }, [isUpdated, id]);
  return (
    <>
      <EditVacancyTable
        singleVacancy={singleVacancy}
        setIsUpdated={setIsUpdated}
        id={id}
      />
    </>
  );
};

export default Id;

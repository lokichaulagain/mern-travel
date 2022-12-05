import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import VacancyTable from "../../components/vacancy/VacancyTable";
import axios from "axios";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";

function Vacancy() {
  const { deleteSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);

  const deleteVacancy = async (id: any) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/vacancy/" + id);
      setIsUpdated(1);
      deleteSuccess();
      console.log("Review deleted success");
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  const [vacancies, setVacancies] = useState([]);
  const fetchAllVacancy = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/vacancy");
      setVacancies(res.data);
      setIsUpdated(2);
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  useEffect(() => {
    fetchAllVacancy();
  }, [isUpdated]);

  return (
    <>
      <Header pageTitle={"Vacancy"} />
      <VacancyTable
        vacancies={vacancies}
        setIsUpdated={setIsUpdated}
        deleteVacancy={deleteVacancy}
      />
    </>
  );
}

export default Vacancy;

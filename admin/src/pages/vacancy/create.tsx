import React from "react";
import Header from "../../components/Header";
import CreateVacancyTable from "../../components/vacancy/CreateVacancyTable";

export default function create() {
  return (
    <>
      <Header pageTitle={"Vacancy / Create"} />
      <CreateVacancyTable />
    </>
  );
}

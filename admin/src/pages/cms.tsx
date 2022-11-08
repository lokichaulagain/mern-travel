import React from "react";
import CmsTable from "../components/cms/CmsTable";
import Header from "../components/Header";

function Cms() {
  return (
    <>
      <Header pageTitle={"cms setting"} />
      <CmsTable />
    </>
  );
}

export default Cms;

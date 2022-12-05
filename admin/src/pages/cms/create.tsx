import React from "react";
import AddCmsDialog from "../../components/cms/AddCmsDialog";
import Header from "../../components/Header";

export default function Create() {
  return (
    <>
      <Header pageTitle={"CMS / Create"} />
      <AddCmsDialog />
    </>
  );
}

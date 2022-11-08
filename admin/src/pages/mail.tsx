import React from "react";
import Header from "../components/Header";
import MailTable from "../components/mail/MailTable";

function Mail() {
  return (
    <>
      <Header pageTitle={"mails"}/>
      <MailTable />
    </>
  );
}

export default Mail;

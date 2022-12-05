import React from "react";
import EditMailTable from "../../components/mail/EditMailTable";
import { MailContextProvider } from "../../../context/MailContext";

export default function Id() {
  return (
    <MailContextProvider>
      <EditMailTable />
    </MailContextProvider>
  );
}

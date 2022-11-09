import React from "react";
import Header from "../../components/Header";
import { EventContextProvider } from "../../../context/EventContext";
import EventTable from "../../components/EventTable";

function Event() {
  return (
    <EventContextProvider>
      <Header pageTitle={"Event Page"} />
      <EventTable />
    </EventContextProvider>
  );
}

export default Event;

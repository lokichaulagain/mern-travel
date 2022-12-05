import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MiscellaneousContext } from "../../context/MiscellaneousContext";
import Header from "../components/Header";
import SubscriberTable from "../components/subscriber/SubscriberTable";

function Subscriber() {
  const { deleteSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);

  const deleteSubscriber = async (id: any) => {
    try {
      const res = await axios.delete("http://localhost:4000/api/subscriber/" + id);
      setIsUpdated(1);
      deleteSuccess();
      console.log("Subscriber deleted success");
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  const [subscribers, setSubscribers] = useState([]);
  const fetchAllSubscriber = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/subscriber");
      setSubscribers(res.data);
      setIsUpdated(0);
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  useEffect(() => {
    fetchAllSubscriber();
  }, [isUpdated]);

  return (
    <>
      <Header pageTitle={"Subscribers"} />
      <SubscriberTable
        deleteSubscriber={deleteSubscriber}
        subscribers={subscribers}
      />
    </>
  );
}

export default Subscriber;

import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import SingleRowTableItem from "../../components/SingleRowTableItem";
import Header from "../../components/Header";
import { EventContext } from "../../../context/EventContext";

const Id = () => {
  const { fetchSingleEvent, singleEvent } = useContext(EventContext);
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    fetchSingleEvent(id);
  }, [id]);

  return (
    <>
      <Header pageTitle={`Event / ${id}`} />

      <div className="row customCard">
        <SingleRowTableItem
          name={"Title"}
          value={singleEvent.title}
        />
        <SingleRowTableItem
          name={"Thumbnail"}
          value={singleEvent.thumbnail}
        />
        <SingleRowTableItem
          name={"Time"}
          value={singleEvent.time}
        />
        <SingleRowTableItem
          name={"Description"}
          value={singleEvent.description}
        />
      </div>
    </>
  );
};

export default Id;

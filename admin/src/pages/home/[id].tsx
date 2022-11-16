import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import SingleRowTableItem from "../../components/SingleRowTableItem";
import { HomeContext } from "../../../context/HomeContext";
import Header from "../../components/Header";

const Id = () => {
  const { singleSec2i, fetchSingleSec2i, fetchSingle2ii, singleSec2ii, fetchSingleSec3i, singleSec3i, fetchSingleSec3ii, singleSec3ii } = useContext(HomeContext);
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    fetchSingleSec2i(id);
    fetchSingle2ii(id);
    fetchSingleSec3i(id);
    fetchSingleSec3ii(id);
  }, [id]);

  return (
    <>
      {singleSec2i ? <Header pageTitle={"Home / Section 2 Carousel"} /> : singleSec2ii ? <Header pageTitle={"Home / Section 2 Description"} /> : fetchSingleSec3i ? <Header pageTitle={"Home / Section 3 Description"} /> : singleSec3ii ? <Header pageTitle={"Home / Section 3 Accordion"} /> : <Header pageTitle={"Home / page not found"} />}

      {singleSec2i && (
        <div className="row customCard">
          <SingleRowTableItem
            name={"Description"}
            value={singleSec2i.description}
          />
          <SingleRowTableItem
            name={"Title"}
            value={singleSec2i.title}
          />
          <SingleRowTableItem
            name={"H1"}
            value={singleSec2i.h1}
          />

          <SingleRowTableItem
            name={"P1"}
            value={singleSec2i.p1}
          />

          <SingleRowTableItem
            name={"H2"}
            value={singleSec2i.h2}
          />

          <SingleRowTableItem
            name={"P1"}
            value={singleSec2i.p2}
          />

          <SingleRowTableItem
            name={"H3"}
            value={singleSec2i.h3}
          />

          <SingleRowTableItem
            name={"P1"}
            value={singleSec2i.p3}
          />
        </div>
      )}

      {singleSec2ii && (
        <div className="row customCard">
          <SingleRowTableItem
            name={"Title"}
            value={singleSec2ii.title}
          />
          <SingleRowTableItem
            name={"Subtitle"}
            value={singleSec2ii.subtitle}
          />
          <SingleRowTableItem
            name={"Description"}
            value={singleSec2ii.description}
          />
        </div>
      )}

      {singleSec3i && (
        <div className="row customCard">
          <SingleRowTableItem
            name={"Title"}
            value={singleSec3i.title}
          />
          <SingleRowTableItem
            name={"Subtitle"}
            value={singleSec3i.subtitle}
          />

          <SingleRowTableItem
            name={"Description"}
            value={singleSec3i.description}
          />
        </div>
      )}

      {singleSec3ii && (
        <div className="row customCard">
          <SingleRowTableItem
            name={"Title"}
            value={singleSec3ii.title}
          />

          <SingleRowTableItem
            name={"Description"}
            value={singleSec3ii.description}
          />
        </div>
      )}
    </>
  );
};

export default Id;

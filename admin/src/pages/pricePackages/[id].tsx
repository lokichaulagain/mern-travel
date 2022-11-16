import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import SingleRowTableItem from "../../components/SingleRowTableItem";
import { PricePackageContext } from "../../../context/PricePackageContext";
import Header from "../../components/Header";

const Id = () => {
  const { fetchSinglePricePackage, singlePricePackage } = useContext(PricePackageContext);
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    fetchSinglePricePackage(id);
  }, [id]);

  return (
    <>
      <Header pageTitle={`Price Package / ${id}`} />

      <div className="row customCard">
        <SingleRowTableItem
          name={"Title"}
          value={singlePricePackage.title}
        />
        <SingleRowTableItem
          name={"Amount"}
          value={singlePricePackage.amount}
        />
        <SingleRowTableItem
          name={"Duration"}
          value={singlePricePackage.duration}
        />
        <SingleRowTableItem
          name={"P1"}
          value={singlePricePackage.p1}
        />
        <SingleRowTableItem
          name={"P2"}
          value={singlePricePackage.p2}
        />
        <SingleRowTableItem
          name={"P3"}
          value={singlePricePackage.p3}
        />
        <SingleRowTableItem
          name={"P4"}
          value={singlePricePackage.p4}
        />
        <SingleRowTableItem
          name={"P5"}
          value={singlePricePackage.p5}
        />
        <SingleRowTableItem
          name={"P6"}
          value={singlePricePackage.p6}
        />
        <SingleRowTableItem
          name={"P8"}
          value={singlePricePackage.p7}
        />
        <SingleRowTableItem
          name={"P9"}
          value={singlePricePackage.p9}
        />
      </div>
    </>
  );
};

export default Id;

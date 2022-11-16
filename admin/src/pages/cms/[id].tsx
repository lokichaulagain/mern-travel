import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { CmsContext } from "../../../context/CmsContext";
import SingleRowTableItem from "../../components/SingleRowTableItem";

const Id = () => {
  const { singleData, fetchCmsDataById } = useContext(CmsContext);
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    fetchCmsDataById(id);
  }, [id]);

  return (
    <div className="row customCard">
      <SingleRowTableItem
        name={"Company Name"}
        value={singleData.companyName}
      />
      <SingleRowTableItem
        name={"Company Logo"}
        value={singleData.companyLogo}
      />
      <SingleRowTableItem
        name={"Phone 1"}
        value={singleData.phone1}
      />
      <SingleRowTableItem
        name={"Email"}
        value={singleData.email}
      />
      <SingleRowTableItem
        name={"WhatsApp"}
        value={singleData.whatsapp}
      />
      <SingleRowTableItem
        name={"Twitter"}
        value={singleData.twitterUrl}
      />
      <SingleRowTableItem
        name={"Facebook"}
        value={singleData.facebookUrl}
      />
      <SingleRowTableItem
        name={"Instagram"}
        value={singleData.instagramUrl}
      />
    </div>
  );
};

export default Id;

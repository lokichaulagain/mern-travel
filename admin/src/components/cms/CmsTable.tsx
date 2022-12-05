import * as React from "react";
import { Button } from "@mui/material";
import Header from "../Header";
import SingleRowTableItem from "../SingleRowTableItem";
import Link from "next/link";

export default function CmsTable({ cmsData, deleteCms }: any) {
  return (
    <>
      <Header pageTitle={"Cms Setting"} />

      <div className="d-flex gap-3 justify-content-end">
        {cmsData && (
          <Link href={`/cms/${cmsData._id}`}>
            <Button
              size="large"
              className="customCard px-4 mb-2">
              Edit
            </Button>
          </Link>
        )}

        {cmsData && (
          <Button
            onClick={() => deleteCms(cmsData._id)}
            size="large"
            className="customCard px-4 mb-2">
            Delete
          </Button>
        )}

        {!cmsData && (
          <Link href={`/cms/create`}>
            <Button
              size="large"
              className="customCard px-4 mb-2">
              Create
            </Button>
          </Link>
        )}
      </div>

      {cmsData && (
        <div className="row customCard">
          <SingleRowTableItem
            name={"Company Name"}
            value={cmsData.companyName}
          />
          <SingleRowTableItem
            name={"Company Logo"}
            value={cmsData.companyLogo}
          />
          <SingleRowTableItem
            name={"Phone 1"}
            value={cmsData.phone1}
          />
          <SingleRowTableItem
            name={"Phone 2"}
            value={cmsData.phone2}
          />
          <SingleRowTableItem
            name={"Email"}
            value={cmsData.email}
          />
          <SingleRowTableItem
            name={"WhatsApp"}
            value={cmsData.whatsapp}
          />
          <SingleRowTableItem
            name={"Twitter"}
            value={cmsData.twitterUrl}
          />
          <SingleRowTableItem
            name={"Facebook"}
            value={cmsData.facebookUrl}
          />
          <SingleRowTableItem
            name={"Instagram"}
            value={cmsData.instagramUrl}
          />
        </div>
      )}
    </>
  );
}

import * as React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCmsDialog from "./AddCmsDialog";
import { useContext } from "react";
import { CmsContext } from "../../../context/CmsContext";

export default function CmsTable() {
  const { cmsData, deleteCms } = useContext(CmsContext);

  return (
    <>
      <AddCmsDialog />
      <div className="customCard mt-2 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Company Name </th>
              <th scope="col">Logo</th>
              <th scope="col">Phone 1</th>
              <th scope="col">Email</th>
              <th scope="col">Whatsapp</th>
              <th scope="col">Twitter</th>
              <th scope="col">Facebook</th>
              <th scope="col">Instagram</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cmsData &&
              cmsData.map((data: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{index + 1}</th>
                  <td>{data.companyName}</td>
                  <td>{data.companyLogo}</td>
                  <td>{data.phone1}</td>
                  <td>{data.email}</td>
                  <td>{data.whatsapp}</td>
                  <td>{data.twitterUrl}</td>
                  <td>{data.facebookUrl}</td>
                  <td>{data.instagramUrl}</td>

                  <td>
                    <div className="d-flex ">
                      <Link href={`staffDetails/1`}>
                        <IconButton aria-label="delete">
                          <VisibilityIcon
                            fontSize="inherit"
                            color="warning"
                          />
                        </IconButton>
                      </Link>

                      {/* Delete alert */}
                      <IconButton
                        aria-label="delete"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal">
                        <DeleteIcon
                          fontSize="inherit"
                          color="warning"
                        />
                      </IconButton>

                      <div
                        className="modal fade "
                        id="exampleModal"
                        tab-index="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog ">
                          <div
                            className="modal-content p-2 rounded-1 "
                            style={{ backgroundColor: "#16181d", color: "#bbc4cc", border: "1px solid #2d3741 " }}>
                            <div className="modal-body">
                              <h3 className="text-center">Are you sure ?</h3>
                            </div>
                            <div className="d-flex justify-content-end gap-3 mt-3">
                              <Button
                                className="table_button px-2"
                                size="small"
                                data-bs-dismiss="modal">
                                Cancell
                              </Button>

                              <Button
                                onClick={() => deleteCms(data._id)}
                                data-bs-dismiss="modal"
                                className="table_button "
                                size="small">
                                Yes Delete
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

import * as React from "react";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import { HomeContext } from "../../../context/HomeContext";
import { useContext } from "react";
import TableHeading from "../TableHeading";
import Add3iDialog from "./Add3iDialog";

export default function Section3iTable() {
  const { sec3i, deleteSec3i } = useContext(HomeContext);

  return (
    <>
      <div className="d-flex align-items-center ">
        <TableHeading heading={"Section 3 Description"} />
        {sec3i.length == 0 ? <Add3iDialog /> : null}
      </div>

      <div className="customCard mt-2 mb-5">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Icon</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sec3i &&
              sec3i.map((data: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{index + 1}</th>
                  <td>{data.icon}</td>
                  <td>{data.title}</td>
                  <td>{data.description}</td>
                  <td>
                    <div className="d-flex ">
                      <Link href={`/home/${data._id}`}>
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
                        data-bs-target="#section3iModal">
                        <DeleteIcon
                          fontSize="inherit"
                          color="warning"
                        />
                      </IconButton>

                      <div
                        className="modal fade "
                        id="section3iModal"
                        tab-index="-1"
                        aria-labelledby="section3iModalLabel"
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
                                onClick={() => deleteSec3i(data._id)}
                                data-bs-dismiss="modal"
                                className="table_button "
                                size="small">
                                Yes Delete
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Delete alert end */}
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

import * as React from "react";
import { IconButton, Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import { useContext } from "react";
import { AncientHimalayanContext } from "../../../context/Context";
import { format } from "timeago.js";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";

export default function MailTable() {
  const { mails, deleteMail } = useContext(AncientHimalayanContext);

  return (
    <>
      <div className="customCard mt-2 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Message</th>
              <th scope="col">Time</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mails &&
              mails.map((mail: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{index + 1}</th>
                  <td>{mail.name}</td>
                  <td>{mail.email}</td>
                  <td>{mail.message}</td>
                  <td>{format(mail.createdAt)}</td>

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
                      {/* <EditEmployeeDetailDialog /> */}

                      <div>
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
                                  onClick={(e) => deleteMail(mail._id)}
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

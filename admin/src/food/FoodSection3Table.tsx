import * as React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import { useContext } from "react";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import TableHeading from "../components/TableHeading";
import AddNewDialog from "../components/home/AddNewDialog";
import { FoodContext } from "../../context/FoodContext";

export default function FoodSection3Table() {
  const { foodSec3, deleteFoodSection3 } = useContext(FoodContext);

  return (
    <>
      <div className="d-flex align-items-center ">
        <TableHeading heading={"Food Section3 "} />
        <AddNewDialog />
      </div>

      <div className="customCard mt-2 ">
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
            {foodSec3 &&
              foodSec3.map((data: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{index + 1}</th>
                  <td>{data.icon}</td>
                  <td>{data.title}</td>
                  <td>{data.description}</td>
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

                      {/* Delete Modal */}
                      <IconButton
                        aria-label="delete"
                        data-bs-toggle="modal"
                        data-bs-target="#foodSection3deleteModal">
                        <DeleteIcon
                          fontSize="inherit"
                          color="warning"
                        />
                      </IconButton>

                      <div
                        className="modal fade "
                        id="foodSection3deleteModal"
                        tab-index="-1"
                        aria-labelledby="foodSection3deleteModalLabel"
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
                                onClick={(e) => deleteFoodSection3(data._id)}
                                data-bs-dismiss="modal"
                                className="table_button "
                                size="small">
                                Yes Delete
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Delete Modal End */}
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

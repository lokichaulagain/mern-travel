import * as React from "react";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import DeleteAlert from "../DeleteAlert";
import AddClientDialog from "./AddClientDialog";

export default function OurClientTable() {
  return (
    <>
      <AddClientDialog />
      <div className="customCard mt-2 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Client Logo </th>
              <th scope="col">Client Name</th>
              <th scope="col">Client Link</th>
              <th scope="col">Client Contact</th>
              <th scope="col">Client Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="customPrimaryTxtColor custom_table_hover ">
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>

              <td>
                <div className="d-flex ">
                  <Link href={`staffDetails/1`}>
                    <IconButton aria-label="delete">
                      <VisibilityIcon fontSize="inherit" color="warning" />
                    </IconButton>
                  </Link>

                  <DeleteAlert />
                </div>
              </td>
            </tr>

            <tr className="customPrimaryTxtColor custom_table_hover ">
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>

              <td>
                <div className="d-flex ">
                  <Link href={`staffDetails/1`}>
                    <IconButton aria-label="delete">
                      <VisibilityIcon fontSize="inherit" color="warning" />
                    </IconButton>
                  </Link>

                  <DeleteAlert />
                </div>
              </td>
            </tr>

            <tr className="customPrimaryTxtColor custom_table_hover ">
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>

              <td>
                <div className="d-flex ">
                  <Link href={`staffDetails/1`}>
                    <IconButton aria-label="delete">
                      <VisibilityIcon fontSize="inherit" color="warning" />
                    </IconButton>
                  </Link>

                  <DeleteAlert />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

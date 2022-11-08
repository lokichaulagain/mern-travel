import * as React from "react";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import DeleteAlert from "../DeleteAlert";
import AddAboutDialog from "./AddAboutDialog";

export default function AboutTable() {
  return (
    <>
      <AddAboutDialog />
      <div className="customCard mt-2 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Title 1</th>
              <th scope="col">Description 1</th>
              <th scope="col">Title 2</th>
              <th scope="col">Description 2</th>
              <th scope="col">Title 3</th>
              <th scope="col">Description 3</th>
              <th scope="col">Title 4</th>
              <th scope="col">Description 4</th>
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
          </tbody>
        </table>
      </div>
    </>
  );
}

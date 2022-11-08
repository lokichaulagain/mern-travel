import * as React from "react";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import DeleteAlert from "../DeleteAlert";
import AddCmsDialog from "./AddCmsDialog";
import { AncientHimalayanContext } from "../../../context/Context";
import { useContext } from "react";

export default function CmsTable() {
  const { cmsData } = useContext(AncientHimalayanContext);
  console.log(cmsData);
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
              <th scope="col">Phone 2</th>
              <th scope="col">Email</th>
              <th scope="col">Instagram</th>
              <th scope="col">Facebook</th>
              <th scope="col">Whatsapp</th>
              <th scope="col">Twitter</th>
              <th scope="col">Linkdin</th>
              <th scope="col">Dribble</th>
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
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>

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

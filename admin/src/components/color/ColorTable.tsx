import React from "react";
import TableHeading from "../TableHeading";
import AddColorDialog from "./AddColorDialog";
import { MdDelete } from "react-icons/md";

export default function ColorTable({ deleteColor, colors, setIsUpdated }: any) {
  return (
    <>
      <div className="d-flex align-items-center  ">
        <TableHeading heading={"All Colors"} />
        <AddColorDialog setIsUpdated={setIsUpdated} />
      </div>

      <div className="customCard mt-2 mb-5 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Colors Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {colors &&
              colors.map((color: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{index + 1}</th>
                  <td>{color.name}</td>

                  <td>
                    <MdDelete
                      className="delete_button_icon"
                      onClick={() => deleteColor(color._id)}
                      aria-label="delete"
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

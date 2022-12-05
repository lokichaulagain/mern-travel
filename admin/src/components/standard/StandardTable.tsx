import React from "react";
import Link from "next/link";
import AddStandardDialog from "./AddStandardDialog";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

export default function StandardTable({ standards, deleteStandard, setIsUpdated }: any) {
  return (
    <>
      <div className="d-flex align-items-center ">
        <AddStandardDialog setIsUpdated={setIsUpdated} />
      </div>

      <div className="customCard mt-2 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Title</th>
              <th scope="col">Icon</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {standards &&
              standards.map((standard: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{index + 1}</th>
                  <td>{standard.title}</td>
                  <td>{standard.icon}</td>
                  <td>
                    <div className="d-flex ">
                      <Link href={`/standard/${standard._id}`}>
                        <div className="d-flex align-items-center">
                          <AiTwotoneEdit className="edit_button_icon" />
                        </div>
                      </Link>

                      <MdDelete
                        className="delete_button_icon"
                        onClick={() => deleteStandard(standard._id)}
                        aria-label="delete"
                      />
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

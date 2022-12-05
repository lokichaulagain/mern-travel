import React from "react";
import Link from "next/link";
import AddServiceDialog from "./AddServiceDialog";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

export default function Section5Table({ services, deleteService, setIsUpdated }: any) {
  return (
    <>
      <div className="d-flex align-items-center ">
        <AddServiceDialog setIsUpdated={setIsUpdated} />
      </div>

      <div className="customCard mt-2 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Title</th>
              <th scope="col">Subtitle</th>
              <th scope="col">Icon</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services &&
              services.map((service: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{index + 1}</th>
                  <td>{service.title}</td>
                  <td>{service.subtitle}</td>
                  <td>{service.icon}</td>
                  <td>
                    <div className="d-flex ">
                      <Link href={`/ourServices/${service._id}`}>
                        <div className="d-flex align-items-center">
                          <AiTwotoneEdit className="edit_button_icon" />
                        </div>
                      </Link>

                      <MdDelete
                        className="delete_button_icon"
                        onClick={() => deleteService(service._id)}
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

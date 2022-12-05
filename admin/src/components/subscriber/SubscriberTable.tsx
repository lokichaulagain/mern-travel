import React from "react";
import TableHeading from "../TableHeading";
import { MdDelete } from "react-icons/md";
import { format } from "timeago.js";

export default function SubscriberTable({ deleteSubscriber, subscribers }: any) {
  return (
    <>
      <div className="d-flex align-items-center  ">
        <TableHeading heading={"All subscribers"} />
      </div>

      <div className="customCard mt-2 mb-5 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Email</th>
              <th scope="col">CreatedAt</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscribers &&
              subscribers.map((subscriber: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{index + 1}</th>
                  <td>{subscriber.email}</td>
                  <td>{format(subscriber.createdAt)}</td>

                  <td>
                    <MdDelete
                      className="delete_button_icon"
                      onClick={() => deleteSubscriber(subscriber._id)}
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

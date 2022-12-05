import * as React from "react";
import Link from "next/link";
import { format } from "timeago.js";
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";

export default function MailTable({ mails, deleteMail }: any) {
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
                      <Link href={`/mail/${mail._id}`}>
                        <div className="d-flex align-items-center">
                          <IoMdEye className="edit_button_icon" />
                        </div>
                      </Link>

                      <MdDelete
                        className="delete_button_icon"
                        onClick={(e) => deleteMail(mail._id)}
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

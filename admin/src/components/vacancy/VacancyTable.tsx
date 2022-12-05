import React from "react";
import Link from "next/link";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Button } from "@mui/material";
import { format } from "timeago.js";
import Image from "next/image";
import parse from "html-react-parser";

export default function VacancyTable({ vacancies, deleteVacancy }: any) {
  return (
    <>
      <div className="d-flex align-items-center justify-content-end ">
        <Link href={"/vacancy/create"}>
          <Button
            size="large"
            className="customCard px-4">
            Add New
          </Button>
        </Link>
      </div>

      <div className="customCard mt-2 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Position</th>
              <th scope="col">Image</th>
              <th scope="col">location</th>
              <th scope="col">Qualification</th>
              <th scope="col">JobType</th>
              <th scope="col">Description</th>
              <th scope="col">Created At</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vacancies &&
              vacancies.map((vacancy: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{index + 1}</th>
                  <td>{vacancy.position}</td>
                  <td>
                    <a
                      className="d-flex "
                      href={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}${vacancy.image}`}>
                      ​
                      <div className="banner_table_image_div">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}${vacancy.image}`}
                          quality={50}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-1"
                          alt="myimage"
                        />
                      </div>
                    </a>
                  </td>
                  <td>{vacancy.location}</td>
                  <td>{vacancy.qualification}</td>
                  <td>{vacancy.jobType}</td>
                  <td>{parse(vacancy.description.substring(0,30))}</td>
                  <td className="small">{format(vacancy.createdAt)}</td>
                  <td>
                    <div className="d-flex ">
                      <Link href={`/vacancy/${vacancy._id}`}>
                        <div className="d-flex align-items-center">
                          <AiTwotoneEdit className="edit_button_icon" />
                        </div>
                      </Link>

                      <MdDelete
                        className="delete_button_icon"
                        onClick={() => deleteVacancy(vacancy._id)}
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

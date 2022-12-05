import React from "react";
import Link from "next/link";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import TableHeading from "../TableHeading";
import AddEventBannerDialog from "./AddEventBannerDialog";
import Image from "next/image";


export default function EventBannerTable({ eventBanners, deleteEventBanner, setIsUpdated }: any) {
  return (
    <>
      <div className="d-flex align-items-center  ">
        <TableHeading heading={"Event Banner"} />
        <AddEventBannerDialog setIsUpdated={setIsUpdated} />
      </div>

      <div className="customCard mt-2 mb-5 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Event Banner</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {eventBanners &&
              eventBanners?.map((eventBanner: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{index + 1}</th>
                  <td>
                  <a
                    className="d-flex "
                    href={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}${eventBanner.image}`}>
                    ​
                    <div className="banner_table_image_div">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}${eventBanner.image}`}
                        quality={50}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-1"
                        alt="myimage"
                      />
                    </div>
                  </a>
                </td>
                  {eventBanner.status == 1 && <td className="active_status_green_color">Active</td>}
                  {eventBanner.status == 0 && <td className="active_status_red_color">InActive</td>}
                  <td>
                    <div className="d-flex ">
                      <Link href={`/eventBanner/${eventBanner._id}`}>
                        <div className="d-flex align-items-center">
                          <AiTwotoneEdit className="edit_button_icon" />
                        </div>
                      </Link>

                      <div>
                        <MdDelete
                          className="delete_button_icon"
                          onClick={() => deleteEventBanner(eventBanner._id)}
                          aria-label="delete"
                        />
                      </div>
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

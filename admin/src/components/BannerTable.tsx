import React from "react";
import TableHeading from "./TableHeading";
import Link from "next/link";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import AddBannerDialog from "./banner/AddBannerDialog";
import Image from "next/image";

export default function BannerTable({ banners, deleteBanner, setIsUpdated }: any) {
  console.log(banners)
  return (
    <>
      <div className="d-flex align-items-center  ">
        <TableHeading heading={"All Banners"} />
        <AddBannerDialog setIsUpdated={setIsUpdated} />
      </div>

      <div className="customCard mt-2 mb-5 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {banners?.map((banner: any, index: any) => (
              <tr
                key={index}
                className="customPrimaryTxtColor custom_table_hover ">
                <th scope="row">{index + 1}</th>
                <td>
                  <a
                    className="d-flex "
                    href={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}${banner.image}`}>
                    ​
                    <div className="banner_table_image_div">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}${banner.image}`}
                        quality={50}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-1"
                        alt="myimage"
                      />
                    </div>
                  </a>
                </td>
                <td>{banner.title}</td>
                <td>{banner.description}</td>
                {banner.status == 1 && <td className="active_status_green_color">Active</td>}
                {banner.status == 0 && <td className="active_status_red_color">InActive</td>}
                <td>
                  <div className="d-flex ">
                    <Link href={`/banner/${banner._id}`}>
                      <div className="d-flex align-items-center">
                        <AiTwotoneEdit className="edit_button_icon" />
                      </div>
                    </Link>

                    <div>
                      <MdDelete
                        className="delete_button_icon"
                        onClick={() => deleteBanner(banner._id)}
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

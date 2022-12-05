import React from "react";
import TableHeading from "../TableHeading";
import AddCategoryDialog from "./AddCategoryDialog";
import { MdDelete } from "react-icons/md";
import Image from "next/image";

export default function CategoryTable({ deleteCategory, categories, setIsUpdated }: any) {
  return (
    <>
      <div className="d-flex align-items-center  ">
        <TableHeading heading={"All Categories"} />
        <AddCategoryDialog setIsUpdated={setIsUpdated} />
      </div>

      <div className="customCard mt-2 mb-5 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Category Name</th>
              <th scope="col">Category Banner</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories &&
              categories.map((category: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{index + 1}</th>

                  <td>{category.name}</td>

                  <td>
                    <a
                      className="d-flex "
                      href={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}${category.image}`}>
                      ​
                      <div className="banner_table_image_div">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}${category.image}`}
                          quality={50}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-1"
                          alt="myimage"
                        />
                      </div>
                    </a>
                  </td>

                  <td>{category.description}</td>

                  <td>
                    <MdDelete
                      className="delete_button_icon"
                      onClick={() => deleteCategory(category._id)}
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

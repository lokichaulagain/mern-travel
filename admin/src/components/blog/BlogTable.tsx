import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { format } from "timeago.js";
import Image from "next/image";
import parse from "html-react-parser";

export default function EventTable({ blogs, deleteBlog }: any) {
  return (
    <>
      <div className="d-flex align-items-center justify-content-end ">
        <Link href={"/blog/create"}>
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
              <th scope="col">Title</th>
              <th scope="col">Image</th>
              <th scope="col">Category</th>
              <th scope="col">Description</th>
              <th scope="col">Created At</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs &&
              blogs.map((data: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{index + 1}</th>
                  <td>{data.title}</td>
                  <td>
                    <a
                      className="d-flex "
                      href={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}${data.image}`}>
                      ​
                      <div className="banner_table_image_div">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}${data.image}`}
                          quality={50}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-1"
                          alt="myimage"
                        />
                      </div>
                    </a>
                  </td>
                  <td>{data.category}</td>
                  <td className="cutoff_text">{parse(data.description ? data.description.substring(0, 30) : " ")}</td>
                  <td className="small">{format(data.createdAt)}</td>
                  <td>
                    <div className="d-flex ">
                      <Link href={`/blog/${data._id}`}>
                        <div className="d-flex align-items-center">
                          <AiTwotoneEdit className="edit_button_icon" />
                        </div>
                      </Link>

                      <MdDelete
                        className="delete_button_icon"
                        onClick={() => deleteBlog(data._id)}
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

// import React from "react";
// import Link from "next/link";
// import { Button } from "@mui/material";
// import { AiTwotoneEdit } from "react-icons/ai";
// import { MdDelete } from "react-icons/md";
// import { format } from "timeago.js";

// export default function EventTable({ blogs, deleteBlog }: any) {
//   return (
//     <>
//       <div className="d-flex align-items-center justify-content-end ">
//         <Link href={"/blog/create"}>
//           <Button
//             size="large"
//             className="customCard px-4">
//             Add New
//           </Button>
//         </Link>
//       </div>

//       <div className="customCard mt-2 ">
//         <table className="table  ">
//           <thead>
//             <tr className="customPrimaryTxtColor">
//               <th scope="col">S.N</th>
//               <th scope="col">Title</th>
//               <th scope="col">Image</th>
//               <th scope="col">Category</th>
//               <th scope="col">Description</th>
//               <th scope="col">Created At</th>
//               <th scope="col">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {blogs &&
//               blogs.map((data: any, index: any) => (
//                 <tr
//                   key={index}
//                   className="customPrimaryTxtColor custom_table_hover ">
//                   <th scope="row">{index + 1}</th>
//                   <td>{data.title}</td>
//                   <td>{data.image}</td>
//                   <td>{data.category}</td>
//                   <td>{data.description}</td>
//                   <td>{format(data.createdAt)}</td>
//                   <td>
//                     <div className="d-flex ">
//                       <Link href={`/blog/${data._id}`}>
//                         <div className="d-flex align-items-center">
//                           <AiTwotoneEdit className="edit_button_icon" />
//                         </div>
//                       </Link>

//                       <MdDelete
//                         className="delete_button_icon"
//                         onClick={() => deleteBlog(data._id)}
//                         aria-label="delete"
//                       />
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

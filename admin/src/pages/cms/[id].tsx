// import React, { useContext, useEffect } from "react";
// import { useRouter } from "next/router";
// import { CmsContext } from "../../../context/CmsContext";

// const Id = () => {
//   const { cmsData, singleData, fetchCmsDataById } = useContext(CmsContext);
//   const titles = [
//     {
//       name: "Company Name",
//     },

//     {
//       name: "Company Logo",
//     },

//     {
//       name: "Phone 1",
//     },

//     {
//       name: "Email",
//     },

//     {
//       name: "WhatsApp",
//     },

//     {
//       name: "Twitter",
//     },

//     {
//       name: "Facebook",
//     },

//     {
//       name: "Instagram",
//     },
//   ];

//   const router = useRouter();
//   const id = router.query.id;

//   useEffect(() => {
//     fetchCmsDataById(id);
//   }, [id]);

//   return (
//     <div className="row customCard">
//       <h4>Heading Here </h4>

//       <table className="table  ">
//         <tbody className="">
//           {titles &&
//             titles.map((title: any, index: any) => (
//               <tr className="customPrimaryTxtColor  d-flex flex-column ">
//                 <th
//                   scope="row"
//                   className="custom_table_hover py-3">
//                   <div className="row">
//                     <div className="col">{title.name}</div>
//                     <div className="col"></div>
//                   </div>
//                 </th>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Id;


import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { CmsContext } from "../../../context/CmsContext";
import SingleRowTableItem from "../../components/SingleRowTableItem";

const Id = () => {
  const {  singleData, fetchCmsDataById } = useContext(CmsContext);
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    fetchCmsDataById(id);
  }, [id]);

  console.log(singleData)

  return (
    <div className="row customCard">
      <h4>Heading Here </h4>
      <SingleRowTableItem name={"Company Name"} value={singleData.companyName} />
      <SingleRowTableItem name={"Company Logo"} value={singleData.companyLogo} />
      <SingleRowTableItem name={"Phone 1"} value={singleData.phone1} />
      <SingleRowTableItem name={"Email"} value={singleData.email} />
      <SingleRowTableItem name={"WhatsApp"} value={singleData.whatsapp} />
      <SingleRowTableItem name={"Twitter"} value={singleData.twitterUrl} />
      <SingleRowTableItem name={"Facebook"} value={singleData.facebookUrl} />
      <SingleRowTableItem name={"Instagram"} value={singleData.instagramUrl} />
    </div>
  );
};

export default Id;


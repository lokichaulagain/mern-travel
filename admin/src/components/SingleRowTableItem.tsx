import React from "react";

const SingleRowTableItem = ({name,value}:any) => {
  return (
    <div>
      <table className="table  ">
        <tbody className="">
          <tr className="customPrimaryTxtColor  d-flex flex-column ">
            <th
              scope="row"
              className="custom_table_hover py-3">
              <div className="row">
                <div className="col">{name}</div>
                <div className="col">{value}</div>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SingleRowTableItem;

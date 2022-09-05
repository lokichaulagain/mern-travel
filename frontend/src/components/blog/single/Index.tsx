import React from "react";
import SideTwo from "../SideTwo";
import SideOneSingle from "./SideOneSingle";
// import styles from "../../styles/scss/SingleBlog.module.scss";
// import styles from "../../styles/scss/SingleBlog.module.scss";
import styles from "../../../styles/scss/SingleBlog.module.scss";
import { Parallax } from "react-parallax";

const SingleBlog = () => {
  return (
    <>
      {/* <header className={`${styles.myHeader} `}>
        <nav className="d-flex justify-content-between">
          <div className="fs-1">THE LAST SUMMER DAYS</div>
          <div>
            <link rel="stylesheet" href="" />
            home /
            <link rel="stylesheet" href="" />
            blog /
            <link rel="stylesheet" href="" />
            about
          </div>
        </nav>
        

        <table width="100%">
          <tr>
            <td>
              <hr style={{ width: "10rem" }} className={`${styles.myhr} `} />
            </td>
            <td style={{ width: "1px", padding: "10px", whiteSpace: "nowrap" }}>
              Where To Enjoy The Last Summer Day
            </td>
            <td>
              <hr style={{ width: "55rem" }} className={`${styles.myhr} `} />
            </td>
          </tr>
        </table>
      </header> */}

      <div className="container">
        <div className={`${styles.mainDiv} row row-cols-1 row-cols-lg-2`}>
          <div className="col col-lg-8">
            <SideOneSingle />
          </div>
          <div className="col col-lg-4">
            <SideTwo />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;

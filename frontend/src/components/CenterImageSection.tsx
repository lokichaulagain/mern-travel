import React from "react";
import { Parallax } from "react-parallax";

const CenterImageSection = () => {
  const bg =
    "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";

  return (
    <Parallax bgImage={bg} strength={-600}>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row container py-5 ">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-5">
              <h6 className="pureWhite h6">Data</h6>
              <h1 className="pureWhite h1">25 JAN</h1>
            </div>

            <div className="col-12 col-sm-6 col-lg-3 col-xl-3 mb-5">
              <h6 className="pureWhite h6">Distance</h6>
              <h1 className="pureWhite h1">8.5 KM</h1>
            </div>

            <div className="col-12 col-sm-6 col-lg-3 col-xl-3 mb-5">
              <h6 className="pureWhite h6">Group size</h6>
              <h1 className="pureWhite h1">10</h1>
            </div>

            <div className="col-12 col-sm-6 col-lg-3 col-xl-3">
              <h6 className="pureWhite h6">Duration</h6>
              <h1 className="pureWhite h1">2 DAYS</h1>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default CenterImageSection;

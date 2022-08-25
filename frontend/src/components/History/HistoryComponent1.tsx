import React from "react";

const HistoryComponent1 = () => {
  return (
    <div className="container px-5">
      <div className="container px-5">
        <div className="row px-3">
          {/* Left side */}
          <div className="col-8">
            <div className="row">
              <div className="col-8">
                <h5>Group fondation</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                  eiusmod tempor incididunt utlabore et dolore magna aliqua.
                  Utenim ad minim veniam rcitation ullamco laboris nisi ut
                  aliquip.
                </p>
              </div>


              <div className="d-flex">
                <div className="vr"></div>
              </div>

              <div className="col-4">
                <h3>1985</h3>
                <h6>Foundation</h6>
              </div>
            </div>


            
          </div>

          {/* Right side */}
          <div className="col-4">
            <p>Alive by</p>
            <div className="container" style={{ display: "flex" }}>
              <span className="h2">25</span>
              <span>Years</span>
            </div>
            <hr />

            <p>Traks length</p>
            <div className="container" style={{ display: "flex" }}>
              <span className="h2">8000</span>
              <span>km</span>
            </div>
            <hr />

            <p>Alive by</p>
            <div className="container" style={{ display: "flex" }}>
              <span className="h2 ">25</span>
              <span>+</span>
            </div>
            {/* Single item carousel */}

            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryComponent1;

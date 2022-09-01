import React from "react";
import Accordion from "./Accordion";

const HomeAboutSection = () => {
  return (
    <div style={{ backgroundColor: "#eff3f6" }}>
      <div className="container py-5">
        <div className="row container py-5">
          <div className="row">
            <h1 className="h1 fw-bolder mainColor">ABOUT US</h1>
            <h6 className="h6 mainColor py-4">We live for the nature</h6>
          </div>
          <div className="row">
            <div className="col-12 pe-0 paraColor col-xl-4 col-lg-4 mb-5  col-md-12">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              incidunt id tempore molestiae odio porro expedita, fuga provident
              dicta placeat. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Vel incidunt id tempore molestiae odio porro expedita, fuga
              provident dicta placeat.
            </div>

            <div className="col-12 pe-0 paraColor col-xl-4 col-lg-4 mb-5 col-md-12 ">
              <p className="paraColor ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
                incidunt id tempore molestiae odio porro expedita, fuga
                provident dicta placeat.Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Vel incidunt id tempore molestiae
              </p>

              <br />
              <a className="link" href="">
                Read more
              </a>
            </div>

            <div className="col-12 pe-0 col-xl-4 col-lg-4 col-md-12">
              <Accordion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutSection;

import React from "react";
import Accordion from "./Accordion";

const HomeAboutSection = () => {
  return (
    <div style={{ backgroundColor: "#eff3f6" }}>
      <div className="container p-5">
        <div className="p-5 ">
          <div className="row mx-1 ">
            <h1 className=" h1 fw-bolder mainColor ">ABOUT US</h1>
            <h6 className=" h6 mainColor py-4 ">We live for the nature</h6>
          </div>
          <div className="row px-3">
            <div className="col paraColor col-lg-3.5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              incidunt id tempore molestiae odio porro expedita, fuga provident
              dicta placeat. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Vel incidunt id tempore molestiae odio porro expedita, fuga
              provident dicta placeat.
            </div>

            <div className="col paraColor  col-lg-3.5">
              <p className="paraColor">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
                incidunt id tempore molestiae odio porro expedita, fuga
                provident dicta placeat.Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Vel incidunt id tempore molestiae
              </p>

              <br />
              <a className="link " href="">
                Read more
              </a>
            </div>

            <div className="col col-lg-5">
              <Accordion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutSection;

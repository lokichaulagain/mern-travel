import React from "react";
import Accordion from "./Accordion";

const AboutSection = () => {
  return (
    <div className="container px-5">
      <div className="px-5">
        <div className="row px-3">
          <div className="col col-lg-3.5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
            incidunt id tempore molestiae odio porro expedita, fuga provident
            dicta placeat. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Vel incidunt id tempore molestiae odio porro expedita, fuga
            provident dicta placeat.
          </div>

          <div className="col col-lg-3.5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
            incidunt id tempore molestiae odio porro expedita, fuga provident
            dicta placeat.Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Vel incidunt id tempore molestiae
            <br />
            <span>Read more</span>
          </div>

          <div className="col col-lg-5">
            <Accordion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

import React from "react";
import Accordion from "./Accordion";
import styles from "../styles/scss/AboutSection.module.scss";

const AboutSection = () => {
  return (
    <div className={`${styles.aboutSection} container-fluid`}>
      <div className="container px-5">
        <div className="px-5">
          <div className={styles.headingDiv}>
            <span className="heading1">ABOUT US</span>
            <span className="heading2">We live for the nature</span>
          </div>
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
              <a className="link" href="">
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

export default AboutSection;

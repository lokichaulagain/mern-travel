import React from "react";
import Accordion from "../Accordion";
import styles from "../../styles/scss/Home.module.scss";

const HomeAboutSection = () => {
  return (
    <div className={`${styles.aboutSection} container-fluid`}>
      <div className="container px-5">
        <div className="px-5">
          <div className={styles.headingDiv}>
            <span className=" h2 mainColor sHeading">ABOUT US</span>
            <span className=" h5 mainColor py-4 sSubHeading">
              We live for the nature
            </span>
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

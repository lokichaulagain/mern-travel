import styles from "../../styles/scss/history/HistorySection1.module.scss";
import { motion } from "framer-motion";

const HistorySection1 = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="container p-5">
        <div className="container p-5">
          <div className="row px-3">
            {/* Left side========================*/}
            <div className="col-8">
              <div className="row py-3">
                <motion.div
                  initial={{ x: "-100vw", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="col-8"
                >
                  <h4 className="h4 hHeading fw-bold">Group fondation</h4>
                  <p className=" hPara fw-normal lh-lg pt-2">
                    Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                    eiusmod tempor incididunt utlabore et dolore magna aliqua.
                    Utenim ad minim veniam rcitation ullamco laboris nisi ut
                    aliquip.
                  </p>
                </motion.div>

                <div className="col-4 loki">
                  <h3 className="he fw-bold hTitle">1985</h3>
                  <h6 className="h6 hPara fw-semibold ">Foundation</h6>
                </div>
              </div>

              <div className="row py-3 loki">
                <div className="col-4 ">
                  <h3 className="he fw-bold hTitle">1990</h3>
                  <h6 className="h6 hPara fw-semibold">Association</h6>
                </div>

                <div className="col-8">
                  <h4 className="h4 hHeading fw-bold">
                    Join of country association
                  </h4>
                  <p className=" hPara fw-normal lh-lg pt-2">
                    Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                    eiusmod tempor incididunt utlabore et dolore magna aliqua.
                    Utenim ad minim veniam rcitation ullamco laboris nisi ut
                    aliquip.
                  </p>
                </div>
              </div>

              <div className="row py-3">
                <div className="col-8">
                  <h4 className="h4 hHeading fw-bold">
                    We are bigger than ever
                  </h4>
                  <p className=" hPara fw-normal lh-lg pt-2">
                    Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                    eiusmod tempor incididunt utlabore et dolore magna aliqua.
                    Utenim ad minim veniam rcitation ullamco laboris nisi ut
                    aliquip.
                  </p>
                </div>

                <div className="col-4 loki">
                  <h3 className="he fw-bold hTitle">2002</h3>
                  <h6 className="h6 hPara fw-semibold">Expansion</h6>
                </div>
              </div>

              <div className="row py-3">
                <div className="col-4 loki">
                  <h3 className="he fw-bold hTitle">2010</h3>
                  <h6 className="h6 hPara fw-semibold">Complete online</h6>
                </div>

                <div className="col-8">
                  <h4 className="h4 hHeading fw-bold">Group fondation</h4>
                  <p className=" hPara fw-normal lh-lg pt-2">
                    Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                    eiusmod tempor incididunt utlabore et dolore magna aliqua.
                    Utenim ad minim veniam rcitation ullamco laboris nisi ut
                    aliquip.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side ================================== */}
            <div className="col-4">
              <p className="fw-semibold hColor ">Alive by</p>
              <div className="container">
                <motion.h1
                  initial={{ x: "100vw", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5, type: "tween" }}
                  className="h1 fw-bold hColor"
                >
                  25 <motion.span className="h6 tinySpan">Years</motion.span>
                </motion.h1>
              </div>
              <hr className="pt-3" />

              <p className="fw-semibold hColor ">Treks length</p>
              <div className="container">
                <h1 className="h1 fw-bold hColor">
                  8000 <span className="h6 tinySpan">km</span>
                </h1>
              </div>
              <hr className="pt-3" />

              <p className="fw-semibold hColor ">Team members</p>
              <div className="container">
                <h1 className="h1 fw-bold hColor">
                  110 <span className="h6 tinySpan">+</span>
                </h1>
              </div>
              <hr className="pt-3" />

              {/* Single item carousel */}
              <div className="row">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem non itaque commodi perferendis reprehenderit
                repudiandae voluptate laborum labore quae cum maxime fugit
                dignissimos maiores libero nemo, nihil odit voluptatem
                voluptates sequi culpa magnam possimus voluptas incidunt iure.
                Officiis delectus qui vel eveniet voluptas dignissimos
                obcaecati! Inventore iste, veritatis odit provident hic non
                similique quasi ratione
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorySection1;

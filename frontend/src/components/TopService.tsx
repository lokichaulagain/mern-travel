import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmbulance } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/scss/TopService.module.scss";
import "../styles/scss/TopService.module.scss";

const TopService = () => {
  return (
    <div className={`${styles.topService} container-fluid`}>
      <div className="container px-5">
        <div className=" px-5">
          <div className="row px-3">
            <div className={styles.headingDiv}>
              <span className="heading1">TOP SERVICE</span>

              <span className="heading2">We provide the best experience</span>
            </div>

            <div className="row">
              <div className={`${styles.borderBottomRight} col`}>
                <div className={`${styles.hover}`}>
                  <FontAwesomeIcon
                    className={styles.boxIcon}
                    icon={faAmbulance}
                  />
                  <h5 className="card-title">Experienced team</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and
                  </p>
                </div>
              </div>

              {/* <div className="vr" style={{height:"100px", width:" 1px "}}></div> */}
              <div className={`${styles.borderBottomRight} col`}>
                <div className={`${styles.hover}`}>
                  <FontAwesomeIcon
                    className={styles.boxIcon}
                    icon={faAmbulance}
                  />
                  <h5 className="card-title">Easy joining</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and
                  </p>
                </div>
              </div>
              {/* <div className="vr"></div> */}
              <div className={`${styles.borderBottomRight} col`}>
                <div className={`${styles.hover}`}>
                  <FontAwesomeIcon
                    className={styles.boxIcon}
                    icon={faAmbulance}
                  />
                  <h5 className="card-title">Expert Hikers</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and
                  </p>
                </div>
              </div>
              {/* <div className="vr"></div> */}
              <div className={`${styles.noBorder} col`}>
                <div className={`${styles.hover}`}>
                  <FontAwesomeIcon
                    className={styles.boxIcon}
                    icon={faAmbulance}
                  />
                  <h5 className="card-title">Secret locations</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and
                  </p>
                </div>
              </div>
            </div>

            {/* <hr /> */}
            <div className="row">
              <div className={`${styles.borderLeft} col`}>
                <div className={`${styles.hover}`}>
                  <FontAwesomeIcon
                    className={styles.boxIcon}
                    icon={faAmbulance}
                  />
                  <h5 className="card-title">Europe locations</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and
                  </p>
                </div>
              </div>
              {/* <div className="vr"    ></div> */}
              <div className={`${styles.borderLeft} col`}>
                <div className={`${styles.hover}`}>
                  <FontAwesomeIcon
                    className={styles.boxIcon}
                    icon={faAmbulance}
                  />
                  <h5 className="card-title">Visit us</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and
                  </p>
                </div>
              </div>
              {/* <div className="vr"/> */}
              <div className={`${styles.borderLeft} col`}>
                <div className={`${styles.hover}`}>
                  <FontAwesomeIcon
                    className={styles.boxIcon}
                    icon={faAmbulance}
                  />
                  <h5 className="card-title">United States</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and
                  </p>
                </div>
              </div>
              {/* <div className="vr"></div> */}
              <div className={`${styles.borderTop} col`}>
                <div className={`${styles.hover}`}>
                  <FontAwesomeIcon
                    className={styles.boxIcon}
                    icon={faAmbulance}
                  />
                  <h5 className="card-title">Great waterfall</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopService;

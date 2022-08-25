import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmbulance } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/scss/Team.module.scss";

const TeamServiceSection = () => {
  return (
    <div className={`${styles.serviceWrapper} p-5`}>
      <div className="container my-5 pt-5 px-5">
        <div className="container px-5">
          <div className="row px-3">
            <div className="container px-5">
              <div className="row">
                <div
                  className="col"
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <FontAwesomeIcon
                    className={`${styles.serviceIcon}`}
                    icon={faAmbulance}
                  />
                  <div className="col">
                    <h4>Experienced team</h4>
                    <p>We always lived inside our amazing nature</p>
                  </div>
                </div>

                <div
                  className="col"
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <FontAwesomeIcon
                    className={`${styles.serviceIcon}`}
                    icon={faAmbulance}
                  />{" "}
                  <div className="col">
                    <h4>Experienced team</h4>
                    <p>We always lived inside our amazing nature</p>
                  </div>
                </div>

                <div
                  className="col"
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <FontAwesomeIcon
                    className={`${styles.serviceIcon}`}
                    icon={faAmbulance}
                  />
                  <div className="col">
                    <h4>Experienced team</h4>
                    <p>We always lived inside our amazing nature</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamServiceSection;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmbulance } from "@fortawesome/free-solid-svg-icons";

const TopService = () => {
  return (
    <div className="container px-5">
      <div className=" px-5">
        <div className="row px-3">
          <div className="row">
            <div className="col">
              <FontAwesomeIcon
                icon={faAmbulance}
                style={{ fontSize: 20, color: "orange" }}
              />
              <h5 className="card-title">Experienced team</h5>
              <p className="card-text">
                Some quick example text to build on the card title and
                
              </p>
            </div>
            <div className="vr "></div>
            <div className="col">
              {" "}
              <FontAwesomeIcon
                icon={faAmbulance}
                style={{ fontSize: 20, color: "orange" }}
              />
              <h5 className="card-title">Easy joining</h5>
              <p className="card-text">
                Some quick example text to build on the card title and
                
              </p>
            </div>
            <div className="vr"></div>
            <div className="col">
              {" "}
              <FontAwesomeIcon
                icon={faAmbulance}
                style={{ fontSize: 20, color: "orange" }}
              />
              <h5 className="card-title">Expert Hikers</h5>
              <p className="card-text">
                Some quick example text to build on the card title and
                
              </p>
            </div>
            <div className="vr"></div>
            <div className="col">
              {" "}
              <FontAwesomeIcon
                icon={faAmbulance}
                style={{ fontSize: 20, color: "orange" }}
              />
              <h5 className="card-title">Secret locations</h5>
              <p className="card-text">
                Some quick example text to build on the card title and
                
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              {" "}
              <FontAwesomeIcon
                icon={faAmbulance}
                style={{ fontSize: 20, color: "orange" }}
              />
              <h5 className="card-title">Europe locations</h5>
              <p className="card-text">
                Some quick example text to build on the card title and
                
              </p>
            </div>
            <div className="vr"></div>
            <div className="col">
              {" "}
              <FontAwesomeIcon
                icon={faAmbulance}
                style={{ fontSize: 20, color: "orange" }}
              />
              <h5 className="card-title">Visit us</h5>
              <p className="card-text">
                Some quick example text to build on the card title and
                
              </p>
            </div>
            <div className="vr"></div>
            <div className="col">
              {" "}
              <FontAwesomeIcon
                icon={faAmbulance}
                style={{ fontSize: 20, color: "orange" }}
              />
              <h5 className="card-title">United States</h5>
              <p className="card-text">
                Some quick example text to build on the card title and
                
              </p>
            </div>
            <div className="vr"></div>
            <div className="col">
              {" "}
              <FontAwesomeIcon
                icon={faAmbulance}
                style={{ fontSize: 20, color: "orange" }}
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
  );
};

export default TopService;

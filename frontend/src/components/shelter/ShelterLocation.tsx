import Image from "next/image";
import React from "react";
import img1 from "../../../public/images/1.jpeg";

const ShelterLocation = () => {
  return (
    <div className="container px-5">
      <div className="container px-5">
        <div className="row px-3">
          <div className="row" style={{ display: "flex" }}>
            <div className="col">
              <button type="button" className="btn btn-primary btn-lg">
                Pokhara
              </button>

              <button type="button" className="btn btn-primary btn-lg">
                Sagarmatha
              </button>

              <button type="button" className="btn btn-primary btn-lg">
                Soyambhunath
              </button>

              <button type="button" className="btn btn-primary btn-lg">
                Chitwan
              </button>
            </div>
          </div>
          {/* --------------------- */}
          <div className="row">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-5">
                  <Image
                    src={img1}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <span>Monte Bianco Mountain</span>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipiscing elitsed
                      do eiusmod tempor incididunt utlabore et dolore magna
                      aliqua. Utenim ad minim veniam quis nostrud exercitatio.
                    </p>
                    <div className="row">
                      <div className="col" style={{ display: "flex" }}>
                        <p>Monte Bianco</p>
                        <div className="vr"></div>
                        <p>Monte Bianco</p>
                        <div className="vr"></div>
                        <p>Monte Bianco</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------ */}
          <div className="row">
            <div className="col-md-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              officiis adipisci? Incidunt ullam vitae repellendus, odio
              accusamus, dolor deleniti exercitationem delectus, dolorem
              temporibus tenetur quo.
            </div>

            <div className="col-md-7">
              <button type="button" className="btn btn-outline-primary btn-lg ">
                View website
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShelterLocation;

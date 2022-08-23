import React from "react";
import Image from "next/image";
import img1 from "../../public/images/1.jpeg";
import img2 from "../../public/images/2.jpeg";
import img3 from "../../public/images/3.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

const CardCarousel = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-label="Slide 1"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className=""
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className=""
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card" style={{ width: "18rem" }}>
              <Image src={img3} alt="" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the content.
                </p>

                <a href="#" className="card-link">
                  <FontAwesomeIcon
                    icon={faAmbulance}
                    style={{ fontSize: 20, color: "orange" }}
                  />
                  Another link
                </a>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card" style={{ width: "18rem" }}>
              <Image src={img3} alt="" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the content.
                </p>

                <a href="#" className="card-link">
                  <FontAwesomeIcon
                    icon={faAmbulance}
                    style={{ fontSize: 20, color: "orange" }}
                  />
                  Another link
                </a>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card" style={{ width: "20rem" }}>
              <Image src={img3} alt="" />

              <div className="card" style={{ width: "18rem" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis dignissimos, consectetur dicta iure in sunt mollitia
                quis.
              </div>

              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the content.
                </p>

                <a href="#" className="card-link">
                  <FontAwesomeIcon
                    icon={faAmbulance}
                    style={{ fontSize: 20, color: "orange" }}
                  />
                  Another link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import person1 from "../../../public/images/6.jpeg";
import styles from "../../styles/scss/home/HomeSection1.module.scss";
import { RiCalendar2Fill } from "react-icons/ri";

const HomeSection1 = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="container  p-5">
        <div className="container p-5">
          <div className="row px-3 ">
            <div className="col-8">
              <Swiper
                slidesPerView={2}
                spaceBetween={20}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div
                    className="card mb-5 border-0 rounded"
                    style={{ width: "22rem" }}
                  >
                    <Image src={person1} className=" rounded" alt="" />
                    {/* small card */}
                    <div className={`${styles.smallCard} card   mx-2`}>
                      <div className="card-body">
                        <div className="row ">
                          <div className="col-4">
                            <h5 className="primaryColor h5">3</h5>
                            <p className="whiteColor">Days</p>
                          </div>
                          <div className="col-4">
                            <h5 className="primaryColor h5">13</h5>
                            <p className="whiteColor">Group Size</p>
                          </div>
                          <div className="col-4">
                            <h5 className="primaryColor h5">Medium</h5>
                            <p className="whiteColor">Difficulty</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* --------- */}
                    <div className="card-body">
                      <h4 className="mainColor pt-3  h4 fw-bold">
                        Bianco Excursion
                      </h4>
                      <p className="mainColor pt-3 lh-lg  card-text">
                        This is a wider card with supporting text below as a
                        natural village.
                      </p>
                      <div className="col">
                        <h6 className="mainColor h6 ">
                          <RiCalendar2Fill className={`${styles.iconSm}`} /> 01
                          October 2019 at 8.00 PM
                        </h6>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="col-4">
              <h2 className="mainColor h2 fw-bolder ">LATEST TRIPS</h2>
              <h6 className="mainColor h6 py-4 ">
                Explore the unexplored world
              </h6>
              <p className="mainColor lh-lg">
                Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                eiusmod tempor incididunt utlabore et dolore magna aliqua.
                Utenim ad minim veniam quiso. Lorem ipsum dolor sit amet
                consectetur adipiscing elitsed do eiusmod tempor incididunt
                utlabore et dolore magna aliqua. Utenim ad minim veniam quiso.
                Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                eiusmod tempor incididunt utlabore .
              </p>

              <button
                type="button"
                className="btn btn-primary mt-4 btn-lg rounded-pill  sButton "
              >
                Join us now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection1;

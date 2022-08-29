import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import person1 from "../../../public/images/6.jpeg";
import styles from "../../styles/scss/home/HomeSection1.module.scss";

const HomeSection1 = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <div className="container  p-5">
        <div className="container p-5">
          <div className="row px-3">
            <div className="col-8">
              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              ></Swiper>
            </div>

            <div className="col-4">
              <span className="h2 sHeading ">LATEST TRIPS</span>
              <h6 className=" h6 py-4 sSubHeading">
                Explore the unexplored world
              </h6>
              <p className="py-3">
                Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                eiusmod tempor incididunt utlabore et dolore magna aliqua.
                Utenim ad minim veniam quiso.
              </p>

              <button
                type="button"
                className="btn btn-primary btn-lg rounded-pill  sButton "
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

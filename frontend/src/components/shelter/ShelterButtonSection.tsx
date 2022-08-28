import styles from "../../styles/scss/shelter/ShelterButtonSection.module.scss";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import person1 from "../../../public/images/5.jpeg";

const ShelterButtonSection = () => {
  return (
    <div>
      {/* 4 button  */}
      <div className="container px-4 d-flex justify-content-center">
        <div className="row p-5">
          <div className="col p-5 gap-5">
            <button
              type="button"
              className={`${styles.button} btn btn-primary mx-3 btn-lg   shadow-lg`}
            >
              Large button
            </button>

            <button
              type="button"
              className={`${styles.button} btn btn-primary mx-3 btn-lg   shadow-lg`}
            >
              Large button
            </button>

            <button
              type="button"
              className={`${styles.button} btn btn-primary mx-3 btn-lg   shadow-lg`}
            >
              Large button
            </button>

            <button
              type="button"
              className={`${styles.button} btn btn-primary mx-3 btn-lg   shadow-lg`}
            >
              Large button
            </button>
          </div>
        </div>
      </div>
      {/* carousel row */}
      <div className="container pb-5  mb-5 px-5">
        <div className="container px-5">
          <div className="row px-4">
            <div className="col-6">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
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
                  <Image
                    src={person1}
                    className={`${styles.img} py-4`}
                    alt="..."
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src={person1}
                    className={`${styles.img}  py-4`}
                    alt="..."
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src={person1}
                    className={`${styles.img}  py-4`}
                    alt="..."
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="col pt-3">
              <h2 className={`${styles.color} h2 fw-bold`}>LILLA REFUGE</h2>
              <h6 className={`${styles.color} h5 pt-3 pb-4`}>
                Nevegal Mountain
              </h6>
              <p className={`${styles.color} pt-2`}>
                Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                eiusmod tempor incididunt utlabore et dolore magna aliqua.
                Utenim ad minim veniam quis nostrud exercitatio.
              </p>
              <div className={`${styles.color} row pt-4`}>
                <h6 className={`${styles.color} col h6`}>Nevegal</h6>
                <h6 className={`${styles.color} col h6`}>1250 m</h6>
                <h6 className={`${styles.color} col h6`}>$40 per night</h6>
              </div>
            </div>
          </div>
          {/* multiCarousel and button row */}
          <div className="row   mx-2 gap-3">
            <div className="col-6 pe-3">
              <Swiper
                slidesPerView={3}
                spaceBetween={10}
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
                  <Image
                    src={person1}
                    className={`${styles.img} rounded py-2`}
                    alt="..."
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src={person1}
                    className={`${styles.img} rounded py-2`}
                    alt="..."
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src={person1}
                    className={`${styles.img} rounded py-2`}
                    alt="..."
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src={person1}
                    className={`${styles.img} rounded py-2`}
                    alt="..."
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src={person1}
                    className={`${styles.img} rounded py-2`}
                    alt="..."
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="col">
              <button type="button" className="btn btn-outline-primary  btn-lg">
                Large button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShelterButtonSection;

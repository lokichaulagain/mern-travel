import { motion } from "framer-motion";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import img1 from "../../../public/images/8.jpeg";
import Image from "next/image";

const HistorySection1 = () => {
  return (
    <div style={{ overflow: "hidden" }} className="container-fluid ">
      <div className="container ">
        <div className="container row py-5">
          {/* Left side========================*/}
          <div className="col col-12 col-sm-12 col-md-12 col-lg-8 ">
            <div className="row py-3">
              <div className="col-8">
                <h4 className="h4 mainColor fw-bold">Group fondation</h4>
                <p className=" paraColor fw-normal lh-lg pt-2">
                  Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                  eiusmod tempor incididunt utlabore et dolore magna aliqua.
                  Utenim ad minim veniam rcitation ullamco laboris nisi ut
                  aliquip.
                </p>
              </div>

              <div className="col-4 ">
                <h3 className="he fw-bold mainColor">1985</h3>
                <h6 className="h6 paraColor fw-semibold ">Foundation</h6>
              </div>
            </div>

            <div className="row py-3 ">
              <div className="col-4 ">
                <h3 className="he fw-bold mainColor">1990</h3>
                <h6 className="h6 paraColor fw-semibold">Association</h6>
              </div>

              <div className="col-8">
                <h4 className="h4 mainColor fw-bold">
                  Join of country association
                </h4>
                <p className=" paraColor fw-normal lh-lg pt-2">
                  Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                  eiusmod tempor incididunt utlabore et dolore magna aliqua.
                  Utenim ad minim veniam rcitation ullamco laboris nisi ut
                  aliquip.
                </p>
              </div>
            </div>

            <div className="row py-3">
              <div className="col-8">
                <h4 className="h4 mainColor fw-bold">
                  We are bigger than ever
                </h4>
                <p className=" paraColor fw-normal lh-lg pt-2">
                  Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                  eiusmod tempor incididunt utlabore et dolore magna aliqua.
                  Utenim ad minim veniam rcitation ullamco laboris nisi ut
                  aliquip.
                </p>
              </div>

              <div className="col-4 ">
                <h3 className="he fw-bold mainColor">2002</h3>
                <h6 className="h6 paraColor fw-semibold">Expansion</h6>
              </div>
            </div>

            <div className="row py-3">
              <div className="col-4 ">
                <h3 className="he fw-bold mainColor">2010</h3>
                <h6 className="h6 paraColor fw-semibold">Complete online</h6>
              </div>

              <div className="col-8">
                <h4 className="h4 mainColor fw-bold">Group fondation</h4>
                <p className=" paraColor fw-normal lh-lg pt-2">
                  Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                  eiusmod tempor incididunt utlabore et dolore magna aliqua.
                  Utenim ad minim veniam rcitation ullamco laboris nisi ut
                  aliquip.
                </p>
              </div>
            </div>
          </div>

          {/* Right side ====================================== */}
          <div className="col col-12 col-sm-12 col-md-12 mt-md-5 col-lg-4 ">
            <p className="fw-semibold mainColor ">Alive by</p>
            <div className="container">
              <motion.h1
                initial={{ x: "100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3, type: "tween" }}
                className="h1 fw-bold mainColor"
              >
                25 <span className="h6 tinySpan">Years</span>
              </motion.h1>
            </div>
            <hr className="pt-3" />

            <p className="fw-semibold mainColor ">Treks length</p>
            <div className="container">
              <motion.h1
                initial={{ x: "100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4, type: "tween" }}
                className="h1 fw-bold mainColor"
              >
                8000 <span className="h6 tinySpan">km</span>
              </motion.h1>
            </div>
            <hr className="pt-3" />

            <p className="fw-semibold mainColor ">Team members</p>
            <div className="container">
              <motion.h1
                initial={{ x: "100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5, type: "tween" }}
                className="h1 fw-bold mainColor"
              >
                110 <span className="h6 tinySpan">+</span>
              </motion.h1>
            </div>
            <hr className="pt-3" />

            {/* Single item carousel */}
            <div className="row">
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Image src={img1} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                  <Image src={img1} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                  <Image src={img1} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                  <Image src={img1} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorySection1;

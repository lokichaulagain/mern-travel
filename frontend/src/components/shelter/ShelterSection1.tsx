import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import img1 from "../../../public/images/8.jpeg";
import styles from "../../styles/scss/shelter/ShelterSection1.module.scss";
import { FaSearchLocation, FaCaravan } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import { RiCalendar2Fill } from "react-icons/ri";
import { MdDinnerDining } from "react-icons/md";
import { GiRunningShoe } from "react-icons/gi";

const ShelterSection1 = () => {
  return (
    <div style={{ backgroundColor: "#EFF3F6" }}>
      <div className="container p-5">
        <div className="container p-5">
          <div className="row py-2 px-4">
            <Swiper
              slidesPerView={4}
              spaceBetween={90}
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
                  className="card p-3 border-0 shadow-sm my-5"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <MdDinnerDining className={`${styles.iconLg}`} />
                    <h4 className={`${styles.h4} h4  pt-3`}>
                      Event organizers
                    </h4>
                    <p className={`${styles.para} card-text lh-base pt-1`}>
                      We are searching for event organizers
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="card p-3 border-0 shadow-sm my-5"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <GiRunningShoe className={`${styles.iconLg}`} />
                    <h4 className={`${styles.h4} h4 pt-3`}>Breakfast</h4>
                    <p className={`${styles.para} card-text lh-base pt-1`}>
                      Take a break in our refuges and hunts.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="card p-3 border-0 shadow-sm my-5"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <FaSearchLocation className={`${styles.iconLg}`} />
                    <h4 className={`${styles.h4} h4 pt-3`}>Trekking</h4>
                    <p className={`${styles.para} card-text lh-base pt-1`}>
                      Lots of refuges through the paths and treks
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="card p-3 border-0 shadow-sm my-5"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <FaCaravan className={`${styles.iconLg}`} />
                    <h4 className={`${styles.h4} h4 pt-3`}>Cable car</h4>
                    <p className={`${styles.para} card-text lh-base pt-1`}>
                      Try the many panoramic cable cars
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="card p-3 border-0 shadow-sm my-5"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <FaSearchLocation className={`${styles.iconLg}`} />
                    <h4 className={`${styles.h4} h4 pt-3`}>Views </h4>
                    <p className={`${styles.para} card-text lh-base pt-1`}>
                      Enjoy amazing and unique natural views
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShelterSection1;

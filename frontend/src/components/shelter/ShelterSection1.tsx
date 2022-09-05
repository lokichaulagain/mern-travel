import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import styles from "../../styles/scss/Shelter.module.scss";
import { FaSearchLocation, FaCaravan } from "react-icons/fa";
import { MdDinnerDining } from "react-icons/md";
import { GiRunningShoe } from "react-icons/gi";

const ShelterSection1 = () => {
  return (
    <div style={{ backgroundColor: "#EFF3F6" }}>
      <div className="container py-5">
        <div className="row container py-2 px-4">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },

              768: {
                slidesPerView: 1,
                spaceBetween: 10,
              },

              800: {
                slidesPerView: 2,
                spaceBetween: 10,
              },

              1024: {
                slidesPerView: 2,
                spaceBetween: 10,
              },

              1200: {
                slidesPerView: 3,
                spaceBetween: 10,
              },

              1400: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div
                className="card p-3 border-0 shadow-sm my-5"
                // style={{ width: "20rem" }}
              >
                <div className="card-body">
                  <MdDinnerDining className="iconLg" />
                  <h4 className="mainColor h4  pt-3">Organizers</h4>
                  <p className="paraColor card-text lh-base pt-1">
                    We are searching for event organizers
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="card p-3 border-0 shadow-sm my-5"
                // style={{ width: "20rem" }}
              >
                <div className="card-body">
                  <MdDinnerDining className="iconLg" />
                  <h4 className="mainColor h4  pt-3">Breakfast</h4>
                  <p className="paraColor card-text lh-base pt-1">
                    We are searching for event organizers
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="card p-3 border-0 shadow-sm my-5"
                // style={{ width: "20rem" }}
              >
                <div className="card-body">
                  <FaSearchLocation className="iconLg" />
                  <h4 className="mainColor h4 pt-3">Trekking</h4>
                  <p className="paraColor card-text lh-base pt-1">
                    Lots of refuges through the paths and
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="card p-3 border-0 shadow-sm my-5"
                // style={{ width: "20rem" }}
              >
                <div className="card-body">
                  <FaCaravan className="iconLg" />
                  <h4 className="mainColor h4 pt-3">Cable car</h4>
                  <p className="paraColor card-text lh-base pt-1">
                    Try the many panoramic cable cars
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="card p-3 border-0 shadow-sm my-5"
                // style={{ width: "20rem" }}
              >
                <div className="card-body">
                  <FaSearchLocation className="iconLg" />
                  <h4 className="mainColor h4 pt-3">Views </h4>
                  <p className="paraColor card-text lh-base pt-1">
                    Enjoy amazing and unique natural
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ShelterSection1;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import person1 from "../../../public/images/6.jpeg";
import Image from "next/image";

const HistorySection2Slider = ({ singlepackage }: any) => {
  return (
    <div
      style={{ backgroundColor: "#EFF2F7" }}
      className="container-fluid">
      <div className="container py-5 ">
        <div className="container row ">
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            slidesPerGroup={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              600: {
                slidesPerView: 3,
                spaceBetween: 20,
              },

              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },

              //	≥992px
              992: {
                slidesPerView: 4,
                spaceBetween: 10,
              },

              // ≥1200px
              1200: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              //≥1400px
              1400: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination]}
            className="mySwiper">
            {singlepackage &&
              singlepackage.map((item: any, index: any) => (
                <SwiperSlide key={index}>
                  <Image
                    src={item.image}
                    height={200}
                    width={200}
                    // className=" rounded"
                    alt=""
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HistorySection2Slider;

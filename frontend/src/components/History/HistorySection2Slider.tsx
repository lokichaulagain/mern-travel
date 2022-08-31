import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import person1 from "../../../public/images/6.jpeg";
import Image from "next/image";

const HistorySection2Slider = () => {
  return (
    <div style={{ backgroundColor: "#EFF2F7" }}>
      <div className="container p-5">
        <div className="container p-5">
          <div className="container px-3">
            <Swiper
              slidesPerView={5}
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
                <Image src={person1} className=" rounded" alt="" />
              </SwiperSlide>

              <SwiperSlide>
                <Image src={person1} className=" rounded" alt="" />
              </SwiperSlide>

              <SwiperSlide>
                <Image src={person1} className=" rounded" alt="" />
              </SwiperSlide>

              <SwiperSlide>
                <Image src={person1} className=" rounded" alt="" />
              </SwiperSlide>

              <SwiperSlide>
                <Image src={person1} className=" rounded" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorySection2Slider;

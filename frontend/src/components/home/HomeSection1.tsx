import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/scss/Home.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import Image from "next/image";
import person1 from "../../../public/images/6.jpeg";
import { RiCalendar2Fill } from "react-icons/ri";

const HomeSection1 = () => {
  return (
    <div style={{ backgroundColor: "white" }} className="container-fluid">
      <div className="container py-5">
        <div className="row container  ">
          <div className="col-xl-8 mt-5 col-lg-8 ">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}
              modules={[Pagination]}
              className="mySwiper swiper-container"
            >
              <SwiperSlide>
                <div className="card mb-5 border-0 rounded">
                  <Image src={person1} className=" rounded" alt="" />

                  <div
                    className="card mx-2 "
                    style={{ backgroundColor: "#12314a" }}
                  >
                    <div className="card-body">
                      <div className="row ">
                        <div className="col">
                          <h5 className="primaryColor h5">5</h5>
                          <p className="whiteColor">Days</p>
                        </div>
                        <div className="col">
                          <h5 className="primaryColor h5">13</h5>
                          <p className="whiteColor">Group Size</p>
                        </div>
                        <div className="col">
                          <h5 className="primaryColor h5">Medium</h5>
                          <p className="whiteColor">Difficulty</p>
                        </div>
                      </div>
                    </div>
                  </div>

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
                        <RiCalendar2Fill
                          style={{ fontSize: "20px" }}
                          className="primaryColor me-2"
                        />
                        01 October 2019 at 8.00 PM
                      </h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card mb-5 border-0 rounded">
                  <Image src={person1} className=" rounded" alt="" />

                  <div
                    className="card mx-2 "
                    style={{ backgroundColor: "#12314a" }}
                  >
                    <div className="card-body">
                      <div className="row ">
                        <div className="col">
                          <h5 className="primaryColor h5">3</h5>
                          <p className="whiteColor">Days</p>
                        </div>
                        <div className="col">
                          <h5 className="primaryColor h5">13</h5>
                          <p className="whiteColor">Group Size</p>
                        </div>
                        <div className="col">
                          <h5 className="primaryColor h5">Medium</h5>
                          <p className="whiteColor">Difficulty</p>
                        </div>
                      </div>
                    </div>
                  </div>

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
                        <RiCalendar2Fill
                          style={{ fontSize: "20px" }}
                          className="primaryColor me-2"
                        />
                        01 October 2019 at 8.00 PM
                      </h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card mb-5 border-0 rounded">
                  <Image src={person1} className=" rounded" alt="" />

                  <div
                    className="card mx-2 "
                    style={{ backgroundColor: "#12314a" }}
                  >
                    <div className="card-body">
                      <div className="row ">
                        <div className="col">
                          <h5 className="primaryColor h5">3</h5>
                          <p className="whiteColor">Days</p>
                        </div>
                        <div className="col">
                          <h5 className="primaryColor h5">13</h5>
                          <p className="whiteColor">Group Size</p>
                        </div>
                        <div className="col">
                          <h5 className="primaryColor h5">Medium</h5>
                          <p className="whiteColor">Difficulty</p>
                        </div>
                      </div>
                    </div>
                  </div>

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
                        <RiCalendar2Fill
                          style={{ fontSize: "20px" }}
                          className="primaryColor me-2"
                        />
                        01 October 2019 at 8.00 PM
                      </h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card mb-5 border-0 rounded">
                  <Image src={person1} className=" rounded" alt="" />

                  <div
                    className="card mx-2 "
                    style={{ backgroundColor: "#12314a" }}
                  >
                    <div className="card-body">
                      <div className="row ">
                        <div className="col">
                          <h5 className="primaryColor h5">3</h5>
                          <p className="whiteColor">Days</p>
                        </div>
                        <div className="col">
                          <h5 className="primaryColor h5">13</h5>
                          <p className="whiteColor">Group Size</p>
                        </div>
                        <div className="col">
                          <h5 className="primaryColor h5">Medium</h5>
                          <p className="whiteColor">Difficulty</p>
                        </div>
                      </div>
                    </div>
                  </div>

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
                        <RiCalendar2Fill
                          style={{ fontSize: "20px" }}
                          className="primaryColor me-2"
                        />
                        01 October 2019 at 8.00 PM
                      </h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card mb-5 border-0 rounded">
                  <Image src={person1} className=" rounded" alt="" />

                  <div
                    className="card mx-2 "
                    style={{ backgroundColor: "#12314a" }}
                  >
                    <div className="card-body">
                      <div className="row ">
                        <div className="col">
                          <h5 className="primaryColor h5">3</h5>
                          <p className="whiteColor">Days</p>
                        </div>
                        <div className="col">
                          <h5 className="primaryColor h5">13</h5>
                          <p className="whiteColor">Group Size</p>
                        </div>
                        <div className="col">
                          <h5 className="primaryColor h5">Medium</h5>
                          <p className="whiteColor">Difficulty</p>
                        </div>
                      </div>
                    </div>
                  </div>

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
                        <RiCalendar2Fill
                          style={{ fontSize: "20px" }}
                          className="primaryColor me-2"
                        />
                        01 October 2019 at 8.00 PM
                      </h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="col-xl-4 col-lg-4 mt-5">
            <h2 className="mainColor h2 fw-bolder ">LATEST TRIPS</h2>
            <h6 className="mainColor h6 py-3 ">Explore the unexplored world</h6>
            <p className="mainColor lh-lg">
              Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
              eiusmod tempor incididunt utlabore et dolore magna aliqua. Utenim
              ad minim veniam quiso. Lorem ipsum dolor sit amet consectetur
              adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore
              magna aliqua. Utenim ad minim veniam quiso. Lorem ipsum dolor sit
              amet consectetur adipiscing elitsed do eiusmod tempor incididunt
              utlabore .
            </p>

            <button
              type="button"
              className={`${styles.customButton} btn btn-lg ms-3 mt-4 rounded-pill px-4 `}
            >
              Join us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection1;

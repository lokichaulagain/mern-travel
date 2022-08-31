import styles from "../../styles/scss/Shelter.module.scss";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import Image from "next/image";
import person1 from "../../../public/images/5.jpeg";

const ShelterButtonSection = () => {
  return (
    <div>
      {/* 4 button  */}
      <div className="container d-flex justify-content-center">
        <div className="row py-5">
          <ul
            className="nav nav-pills mb-3 gap-4"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className=" btn active shelterButton btn-lg   shadow-lg"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Large button
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className=" btn shelterButton  btn-lg   shadow-lg"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Large button
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className=" btn shelterButton  btn-lg   shadow-lg"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Large button
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className=" btn shelterButton  btn-lg   shadow-lg"
                id="pills-disabled-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-disabled"
                type="button"
                role="tab"
                aria-controls="pills-disabled"
                aria-selected="false"
              >
                Large button
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="tab-content" id="pills-tabContent">
        {/* Home Content */}
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
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
                      <Image src={person1} className=" py-4" alt="..." />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image src={person1} className="  py-4" alt="..." />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image src={person1} className="  py-4" alt="..." />
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="col pt-3">
                  <h2 className="mainColor h2 fw-bold">LILLA REFUGE</h2>
                  <h6 className="mainColor h5 pt-3 pb-4">Nevegal Mountain</h6>
                  <p className="mainColor pt-2">
                    Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                    eiusmod tempor incididunt utlabore et dolore magna aliqua.
                    Utenim ad minim veniam quis nostrud exercitatio.
                  </p>
                  <div className="mainColor row pt-4">
                    <h6 className="mainColor col h6">Nevegal</h6>
                    <h6 className="mainColor col h6">1250 m</h6>
                    <h6 className="mainColor col h6">$40 per night</h6>
                  </div>
                </div>
              </div>

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
                        className=" rounded py-2"
                        alt="..."
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image
                        src={person1}
                        className=" rounded py-2"
                        alt="..."
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image
                        src={person1}
                        className=" rounded py-2"
                        alt="..."
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image
                        src={person1}
                        className=" rounded py-2"
                        alt="..."
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image
                        src={person1}
                        className=" rounded py-2"
                        alt="..."
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="col">
                  <button type="button" className="btn customButton  btn-lg   ">
                    Large button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
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
                      <Image src={person1} className=" py-4" alt="..." />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image src={person1} className="  py-4" alt="..." />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image src={person1} className="  py-4" alt="..." />
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="col pt-3">
                  <h2 className="mainColor h2 fw-bold">LILLA REFUGE</h2>
                  <h6 className="mainColor h5 pt-3 pb-4">Nevegal Mountain</h6>
                  <p className="mainColor pt-2">
                    Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                    eiusmod tempor incididunt utlabore et dolore magna aliqua.
                    Utenim ad minim veniam quis nostrud exercitatio.
                  </p>
                  <div className="mainColor row pt-4">
                    <h6 className="mainColor col h6">Nevegal</h6>
                    <h6 className="mainColor col h6">1250 m</h6>
                    <h6 className="mainColor col h6">$40 per night</h6>
                  </div>
                </div>
              </div>

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
                        className=" rounded py-2"
                        alt="..."
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image
                        src={person1}
                        className=" rounded py-2"
                        alt="..."
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image
                        src={person1}
                        className=" rounded py-2"
                        alt="..."
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image
                        src={person1}
                        className=" rounded py-2"
                        alt="..."
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image
                        src={person1}
                        className=" rounded py-2"
                        alt="..."
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="col">
                  <button type="button" className="btn customButton  btn-lg ">
                    Large button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact content */}
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
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
                      <Image src={person1} className=" py-4" alt="..." />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image src={person1} className="  py-4" alt="..." />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image src={person1} className="  py-4" alt="..." />
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="col pt-3">
                  <h2 className="mainColor h2 fw-bold">LILLA REFUGE</h2>
                  <h6 className="mainColor h5 pt-3 pb-4">Nevegal Mountain</h6>
                  <p className="mainColor pt-2">
                    Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                    eiusmod tempor incididunt utlabore et dolore magna aliqua.
                    Utenim ad minim veniam quis nostrud exercitatio.
                  </p>
                  <div className="mainColor row pt-4">
                    <h6 className="mainColor col h6">Nevegal</h6>
                    <h6 className="mainColor col h6">1250 m</h6>
                    <h6 className="mainColor col h6">$40 per night</h6>
                  </div>
                </div>
              </div>

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
                        className=" rounded py-2"
                        alt="..."
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image
                        src={person1}
                        className=" rounded py-2"
                        alt="..."
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image
                        src={person1}
                        className=" rounded py-2"
                        alt="..."
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image
                        src={person1}
                        className=" rounded py-2"
                        alt="..."
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image
                        src={person1}
                        className=" rounded py-2"
                        alt="..."
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="col">
                  <button type="button" className="btn customButton  btn-lg ">
                    Large button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disabled content */}
        <div
          className="tab-pane fade"
          id="pills-disabled"
          role="tabpanel"
          aria-labelledby="pills-disabled-tab"
        >
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
                      <Image src={person1} className=" py-4" alt="..." />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image src={person1} className="  py-4" alt="..." />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image src={person1} className="  py-4" alt="..." />
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="col pt-3">
                  <h2 className="mainColor h2 fw-bold">LILLA REFUGE</h2>
                  <h6 className="mainColor h5 pt-3 pb-4">Nevegal Mountain</h6>
                  <p className="mainColor pt-2">
                    Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                    eiusmod tempor incididunt utlabore et dolore magna aliqua.
                    Utenim ad minim veniam quis nostrud exercitatio.
                  </p>
                  <div className="mainColor row pt-4">
                    <h6 className="mainColor col h6">Nevegal</h6>
                    <h6 className="mainColor col h6">1250 m</h6>
                    <h6 className="mainColor col h6">$40 per night</h6>
                  </div>
                </div>
              </div>

              <div className="row   mx-2 gap-3">
                {/* Small carousel */}
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
                        className=" rounded py-2"
                        alt="..."
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image
                        src={person1}
                        className=" rounded py-2"
                        alt="..."
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image
                        src={person1}
                        className=" rounded py-2"
                        alt="..."
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image
                        src={person1}
                        className=" rounded py-2"
                        alt="..."
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image
                        src={person1}
                        className=" rounded py-2"
                        alt="..."
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>

                {/* Button */}
                <div className="col">
                  <button type="button" className="btn customButton  btn-lg ">
                    Large button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShelterButtonSection;

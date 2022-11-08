import { Swiper, SwiperSlide } from "swiper/react";

import styles from "../../styles/scss/Home.module.scss";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { motion } from "framer-motion";
import "swiper/css";

const HomeHoverCard = () => {
  return (
    <div className="container-fluid">
      {/* <div className="container"> */}
      <div
        className="row my-5"
        style={{ overflow: "hidden" }}>
        {/* <div className=" col-12 mb-5 col-sm-12  col-md-12  col-lg-12 col-xxl-7 ">
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
                slidesPerView: 2,
                spaceBetween: 10,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div
                className={`${styles.bg} card p-3 shadow-sm border-0 rounded`}
                style={{ backgroundColor: "green", height: "600px" }}
              >
                <motion.div
                  animate={{ y: 350, opacity: 1 }}
                  whileInView={{ y: [350, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "tween" }}
                  className="card-body"
                >
                  <h4 className="pureWhite pt-1  h3 fw-bold">
                    Bianco Excursion
                  </h4>

                  <div className="col">
                    <h6 className="whiteColor pt-3 h6 ">
                      October 2019 at 8.00 PM
                    </h6>
                  </div>

                  <p className="pureWhite pt-3 lh-lg  card-text">
                    This is a wider card with supporting text below as a natural
                    village text below as a natural .
                  </p>
                </motion.div>

                <button type="button" className="btn col-4 my-4 customButton">
                  Primary
                </button>
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div
                className={`${styles.bg} card p-3 shadow-sm border-0 rounded`}
                style={{ backgroundColor: "green", height: "600px" }}
              >
                <motion.div
                  animate={{ y: 350, opacity: 1 }}
                  whileInView={{ y: [350, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "tween" }}
                  className="card-body"
                >
                  <h4 className="pureWhite pt-1  h3 fw-bold">
                    Bianco Excursion
                  </h4>

                  <div className="col">
                    <h6 className="whiteColor pt-3 h6 ">
                      October 2019 at 8.00 PM
                    </h6>
                  </div>

                  <p className="pureWhite pt-3 lh-lg  card-text">
                    This is a wider card with supporting text below as a natural
                    village text below as a natural .
                  </p>
                </motion.div>

                <button type="button" className="btn col-4 my-4 customButton">
                  Primary
                </button>
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div
                className={`${styles.bg} card p-3 shadow-sm border-0 rounded`}
                style={{ backgroundColor: "green", height: "600px" }}
              >
                <motion.div
                  animate={{ y: 350, opacity: 1 }}
                  whileInView={{ y: [350, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "tween" }}
                  className="card-body"
                >
                  <h4 className="pureWhite pt-1  h3 fw-bold">
                    Bianco Excursion
                  </h4>

                  <div className="col">
                    <h6 className="whiteColor pt-3 h6 ">
                      October 2019 at 8.00 PM
                    </h6>
                  </div>

                  <p className="pureWhite pt-3 lh-lg  card-text">
                    This is a wider card with supporting text below as a natural
                    village text below as a natural .
                  </p>
                </motion.div>

                <button type="button" className="btn col-4 my-4 customButton">
                  Primary
                </button>
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div
                className={`${styles.bg} card p-3 shadow-sm border-0 rounded`}
                style={{ backgroundColor: "green", height: "600px" }}
              >
                <motion.div
                  animate={{ y: 350, opacity: 1 }}
                  whileInView={{ y: [350, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "tween" }}
                  className="card-body"
                >
                  <h4 className="pureWhite pt-1  h3 fw-bold">
                    Bianco Excursion
                  </h4>

                  <div className="col">
                    <h6 className="whiteColor pt-3 h6 ">
                      October 2019 at 8.00 PM
                    </h6>
                  </div>

                  <p className="pureWhite pt-3 lh-lg  card-text">
                    This is a wider card with supporting text below as a natural
                    village text below as a natural .
                  </p>
                </motion.div>

                <button type="button" className="btn col-4 my-4 customButton">
                  Primary
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div> */}

        {/* Right   */}
        <motion.div
          animate={{ x: 150, opacity: 1 }}
          whileInView={{ x: [150, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "tween" }}
          className=" col-12  ">
          <div className="  ">
            <h1 className="lh-base h1 fw-bolder pureWhite text-center">THE TREKS OF OUR TEAM</h1>
            <p className=" lh-lg mt-3  h5 whiteColor text-center">Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiure consectetur adipisicing a didunto persmo.</p>
          </div>

          {/* Two Button */}
          <div className="col-12 mt-5 text-center">
            <button
              type="button"
              className={`${styles.customOutlineButton} btn btn-lg  rounded-pill `}>
              All Treks
            </button>
            <button
              type="button"
              className={`${styles.customButton} btn btn-lg ms-3 rounded-pill  `}>
              The Team
            </button>
          </div>
        </motion.div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default HomeHoverCard;

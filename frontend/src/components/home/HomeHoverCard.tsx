import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/scss/Home.module.scss";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { motion } from "framer-motion";
import "swiper/css";

const HomeHoverCard = () => {
  return (
    <div className="row my-5 py-5 mx-3" style={{ overflow: "hidden" }}>
      <div className="col-6">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
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
              className={`${styles.bg} card p-3 shadow-sm border-0 rounded`}
              style={{ width: "18rem", backgroundColor: "green" }}
            >
              <motion.div
                animate={{ y: 350, opacity: 1 }}
                whileInView={{ y: [350, 0] }}
                transition={{ duration: 0.8, type: "tween" }}
                className="card-body"
              >
                <h4 className="pureWhite pt-1  h3 fw-bold">Bianco Excursion</h4>

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

              <button type="button" className="btn col-4 my-4  customButton">
                Primary
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className={`${styles.bg} card p-3 shadow-sm border-0 rounded`}
              style={{ width: "18rem", backgroundColor: "green" }}
            >
              <motion.div
                animate={{ y: 350, opacity: 1 }}
                whileInView={{ y: [350, 0] }}
                transition={{ duration: 0.8, type: "tween" }}
                className="card-body"
              >
                <h4 className="pureWhite pt-1  h3 fw-bold">Bianco Excursion</h4>

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
              style={{ width: "18rem", backgroundColor: "green" }}
            >
              <motion.div
                animate={{ y: 350, opacity: 1 }}
                whileInView={{ y: [350, 0] }}
                transition={{ duration: 0.8, type: "tween" }}
                className="card-body"
              >
                <h4 className="pureWhite pt-1  h3 fw-bold">Bianco Excursion</h4>

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
      </div>

      {/* Right   */}
      <motion.div
        animate={{ x: 350, opacity: 1 }}
        whileInView={{ x: [350, 0] }}
        transition={{ duration: 0.8, type: "tween" }}
        className="col-6   ps-3"
      >
        <div className="row ps-5">
          <h1 className="lh-base h1 fw-bolder pureWhite">
            THE TREKS OF <br /> OUR TEAM
          </h1>
          <p className=" lh-lg mt-3 h5 whiteColor">
            Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiure{" "}
            <br />
            consectetur adipisicing a didunto persmo.
          </p>
        </div>

        {/* Two Button */}
        <div className=" mt-4 ps-5 col">
          <button
            type="button"
            className="btn customButton rounded-pill btn-lg px-4 "
          >
            All Treks
          </button>
          <button
            type="button"
            className=" btn ms-3  btn-outline  customOutlineButton rounded-pill btn-lg px-4 "
          >
            The Team
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeHoverCard;

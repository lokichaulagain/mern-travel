import styles from "../../styles/scss/Home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const HomeHoverCard = () => {
  return (
    <div className="row my-5 py-5 mx-3">
      <div className="col-6" style={{ display: "flex", gap: "20px" }}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className={`${styles.centerCardWrapper} card col-4 p-3`}>
            <SwiperSlide style={{ backgroundColor: "white" }}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </SwiperSlide>
          </div>

          <div className={`${styles.centerCardWrapper} card col-4 p-3`}>
            <SwiperSlide style={{ backgroundColor: "white" }}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </SwiperSlide>
          </div>

          <div className={`${styles.centerCardWrapper} card col-4 p-3`}>
            <SwiperSlide style={{ backgroundColor: "white" }}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </SwiperSlide>
          </div>

          <div className={`${styles.centerCardWrapper} card col-4 p-3`}>
            <SwiperSlide style={{ backgroundColor: "white" }}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </SwiperSlide>
          </div>

          <div className={`${styles.centerCardWrapper} card col-4 p-3`}>
            <SwiperSlide style={{ backgroundColor: "white" }}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </SwiperSlide>
          </div>

          <div className={`${styles.centerCardWrapper} card col-4 p-3`}>
            <SwiperSlide style={{ backgroundColor: "white" }}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>

      {/* Heading and para */}
      <div className="col-6   ps-5">
        <div className="row ps-5">
          <h1 className={`${styles.heading} lh-base`}>
            THE TREKS OF <br /> OUR TEAM
          </h1>
          <p className={`${styles.para} lh-lg mt-3`}>
            Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiure{" "}
            <br />
            consectetur adipisicing a didunto persmo.
          </p>
        </div>

        {/* Two Button */}
        <div className={`${styles.buttonRow} mt-4 ps-5 col`}>
          <button
            type="button"
            className="btn btn-primary rounded-pill btn-lg px-4 "
          >
            All Treks
          </button>
          <button
            type="button"
            className={`${styles.bottom2} btn ms-3  btn-outline rounded-pill btn-lg px-4 `}
          >
            The Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHoverCard;

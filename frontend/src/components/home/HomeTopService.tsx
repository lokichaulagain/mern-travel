import styles from "../../styles/scss/Home.module.scss";
import { GiWalkingBoot, GiMountainRoad, GiWaterfall } from "react-icons/gi";
import { BsFlower2, BsGlobe } from "react-icons/bs";
import { FaRegFlag } from "react-icons/fa";
import { MdOutlineEditLocationAlt, MdShareLocation } from "react-icons/md";
import { motion } from "framer-motion";

const HomeTopService = () => {
  return (
    <div
      style={{ backgroundColor: "#fefeff" }}
      className="py-5 container-fluid"
    >
      <div className="container my-5">
        <div className="row container ">
          <div className="row">
            <h2 className="h2 fw-bolder mainColor">TOP SERVICE</h2>
            <h6 className="h6 mainColor my-3">
              We provide the best experience
            </h6>
          </div>

          <div className="row">
            <div className="col-12 col-sm-12 col-md-6  col-lg-3 mt-5">
              <motion.div
                whileHover={{ scale: 0.9 }}
                className={styles.iconDiv}
              >
                <GiWalkingBoot
                  className="primaryColor"
                  style={{ fontSize: "50px" }}
                />

                <h5 className="h5 mainColor mt-2 ">Experienced team</h5>
                <p className="lh-base paraColor">
                  Some quick example text to build on the card title and
                </p>
              </motion.div>
            </div>

            <div className="col-12 col-sm-12 col-md-6  col-lg-3 mt-5">
              <motion.div
                whileHover={{ scale: 0.9 }}
                className={styles.iconDiv}
              >
                <BsFlower2
                  className="primaryColor"
                  style={{ fontSize: "50px" }}
                />
                <h5 className="h5 mainColor mt-2 ">Easy joining</h5>
                <p className="lh-base paraColor">
                  Some quick example text to build on the card title and
                </p>
              </motion.div>
            </div>

            <div className="col-12 col-sm-12 col-md-6   col-lg-3 mt-5">
              <motion.div
                whileHover={{ scale: 0.9 }}
                className={styles.iconDiv}
              >
                <GiMountainRoad
                  className="primaryColor"
                  style={{ fontSize: "50px" }}
                />
                <h5 className="h5 mainColor mt-2 ">Expert Hikers</h5>
                <p className="lh-base paraColor">
                  Some quick example text to build on the card title and
                </p>
              </motion.div>
            </div>

            <div className="col-12 col-sm-12 col-md-6  col-lg-3 mt-5">
              <motion.div
                whileHover={{ scale: 0.9 }}
                className={styles.iconDiv}
              >
                <MdShareLocation
                  className="primaryColor"
                  style={{ fontSize: "50px" }}
                />
                <h5 className="h5 mainColor mt-2 ">Secret locations</h5>
                <p className="lh-base paraColor">
                  Some quick example text to build on the card title and
                </p>
              </motion.div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-12 col-md-6  col-lg-3 mt-5">
              <motion.div
                whileHover={{ scale: 0.9 }}
                className={styles.iconDiv}
              >
                <FaRegFlag
                  className="primaryColor"
                  style={{ fontSize: "50px" }}
                />
                <h5 className="h5 mainColor mt-2 ">Europe locations</h5>
                <p className="lh-base paraColor">
                  Some quick example text to build on the card title and
                </p>
              </motion.div>
            </div>

            <div className="col-12 col-sm-12 col-md-6  col-lg-3 mt-5">
              <motion.div
                whileHover={{ scale: 0.9 }}
                className={styles.iconDiv}
              >
                <MdOutlineEditLocationAlt
                  className="primaryColor"
                  style={{ fontSize: "50px" }}
                />
                <h5 className="h5 mainColor mt-2 ">Visit us</h5>
                <p className="lh-base paraColor">
                  Some quick example text to build on the card title and
                </p>
              </motion.div>
            </div>

            <div className="col-12 col-sm-12 col-md-6  col-lg-3 mt-5">
              <motion.div
                whileHover={{ scale: 0.9 }}
                className={styles.iconDiv}
              >
                <BsGlobe
                  className="primaryColor"
                  style={{ fontSize: "50px" }}
                />
                <h5 className="h5 mainColor mt-2 ">United States</h5>
                <p className="lh-base paraColor">
                  Some quick example text to build on the card title and
                </p>
              </motion.div>
            </div>

            <div className="col-12 col-sm-12 col-md-6  col-lg-3 mt-5">
              <motion.div
                whileHover={{ scale: 0.9 }}
                className={styles.iconDiv}
              >
                <GiWaterfall
                  className="primaryColor"
                  style={{ fontSize: "50px" }}
                />
                <h5 className="h5 mainColor mt-2 ">Great waterfall</h5>
                <p className="lh-base paraColor">
                  Some quick example text to build on the card title and
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTopService;

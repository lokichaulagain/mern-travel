import React from "react";
import styles from "../../styles/scss/Team.module.scss";
import { FaParachuteBox } from "react-icons/fa";
import { GiBee } from "react-icons/gi";
import { BiBarChart } from "react-icons/bi";
import { motion } from "framer-motion";

const TeamServiceSection = () => {
  return (
    <div className=" p-5" style={{ backgroundColor: " #eef2f6" }}>
      <div className="container my-5 pt-5 px-5">
        <div className="container px-5">
          <div className="row px-3">
            <div className="container ">
              <div className="row">
                <motion.div
                  whileHover={{ scale: 0.95 }}
                  className={`${styles.serviceContainer} col gap-4`}
                >
                  <motion.div whileInView={{ y: [null, 50, 0] }}>
                    <FaParachuteBox className="iconLg mb-3" />
                  </motion.div>
                  <div className="col col-lg-10 col-md-10  gap-4">
                    <h5 className="h5 mainColor">Experienced team</h5>
                    <p className="paraColor">
                      We always lived inside our amazing nature
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 0.95 }}
                  className={`${styles.serviceContainer} col gap-4`}
                >
                  <motion.div whileInView={{ y: [null, 50, 0] }}>
                    <BiBarChart className="iconLg mb-3" />
                  </motion.div>
                  <div className="col-lg-10 mt-lg-5 col-md-10 mt-md-5 mt-sm-5 gap-4">
                    <h5 className="h5 mainColor">Career opportunities</h5>
                    <p className="paraColor">
                      Grow with us is possible thanks to our levels structure.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 0.95 }}
                  className={`${styles.serviceContainer} col gap-4`}
                >
                  <motion.div whileInView={{ y: [null, 50, 0] }}>
                    <GiBee className="iconLg mb-3" />
                  </motion.div>
                  <div className="col col-lg-10 mt-lg-5 col-md-10 mt-md-5 mt-sm-5 gap-4">
                    <h5 className="h5 mainColor">Meet amazing people</h5>
                    <p className="paraColor ">
                      We are the best team ever! Funny and friendly with each
                      other.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamServiceSection;

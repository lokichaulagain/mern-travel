import React from "react";
import styles from "../../styles/scss/team/TeamServiceSection.module.scss";
import { FaParachuteBox } from "react-icons/fa";
import { GiBee } from "react-icons/gi";
import { BiBarChart } from "react-icons/bi";
import { animate, motion } from "framer-motion";

const TeamServiceSection = () => {
  return (
    <div className={`${styles.serviceWrapper} p-5`}>
      <div className="container my-5 pt-5 px-5">
        <div className="container px-5">
          <div className="row px-3">
            <div className="container ">
              <div className="row">
                <div className={`${styles.serviceContainer} col gap-4`}>
                  <motion.div whileInView={{ x: [null, 100, 0] }}  whileHover={{ scale: 1.2 }}>
                    <FaParachuteBox
                      className={`${styles.serviceIcon} mb-3  `}
                    />
                  </motion.div>
                  <div className="col">
                    <h5 className="h5">Experienced team</h5>
                    <p className={` ${styles.para}`}>
                      We always lived inside our amazing nature
                    </p>
                  </div>
                </div>

                <div className={`${styles.serviceContainer} col gap-4`}>
                  <motion.div whileInView={{ x: [null, 100, 0] }}  whileHover={{ scale: 1.2 }}>
                    <BiBarChart className={`${styles.serviceIcon} mb-3  `} />
                  </motion.div>
                  <div className="col">
                    <h5 className="h5">Career opportunities</h5>
                    <p className={` ${styles.para}`}>
                      Grow with us is possible thanks to our levels structure.
                    </p>
                  </div>
                </div>

                <div className={`${styles.serviceContainer} col gap-4`}>
                  <motion.div whileInView={{ x: [null, 100, 0] }}   whileHover={{ scale: 1.2 }}>
                    <GiBee className={`${styles.serviceIcon} mb-3  `} />
                  </motion.div>

                  <div className="col">
                    <h5 className="h5">Meet amazing people</h5>
                    <p className={` ${styles.para}`}>
                      We are the best team ever! Funny and friendly with each
                      other.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamServiceSection;

import styles from "../../styles/scss/price/PriceCardSection.module.scss";
import { motion } from "framer-motion";

const PriceCardSection = () => {
  return (
    <div className="container py-5 px-5">
      <div className="container py-4 px-5">
        <div className="row px-3">
          <div className="col-4 pb-5">
            {/* card1 */}
            <motion.div
              whileHover={{ y: 30 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1  }}
            >
              <div className="card text-center shadow-lg border-0">
                <div className="card-body p-5">
                  <h3 className={`${styles.h3} h4 fw-bold `}>Tourist guide</h3>
                  <p className="h3 pt-3">
                    $ <span className={`${styles.money} h1 fw-bold`}>100</span>
                  </p>
                  <p className={`${styles.para} card-text fw-semibold pt-3`}>
                    Per half day
                  </p>
                  <li className={`${styles.li} `}>Dedicated guide</li>
                  <li className={`${styles.li} pt-3`}>Great experience</li>
                  <li className={`${styles.li} pt-3`}>Cheap prices</li>
                  <li className={`${styles.li} pt-3`}>English language</li>
                  <li className={`${styles.li} pt-3`}>Italian language</li>
                  <li className={`${styles.li} pt-3`}>Spanish language</li>
                  <li className={`${styles.li} pt-3`}>Spanish language</li>
                  <li className={`${styles.li} pt-3`}>Equipment included</li>
                </div>
              </div>
            </motion.div>
          </div>

          {/* card2 */}
          <div className="col-4">
            <motion.div
              whileHover={{ y: 30 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <div className="card text-center shadow-lg border-0">
                <div className="card-body p-5">
                  <h3 className={`${styles.h3} h4 fw-bold `}>Tourist guide</h3>
                  <p className="h3 pt-3">
                    $ <span className={`${styles.money} h1 fw-bold`}>100</span>
                  </p>
                  <p className={`${styles.para} card-text fw-semibold pt-3`}>
                    Per half day
                  </p>
                  <li className={`${styles.li} `}>Dedicated guide</li>
                  <li className={`${styles.li} pt-3`}>Great experience</li>
                  <li className={`${styles.li} pt-3`}>Cheap prices</li>
                  <li className={`${styles.li} pt-3`}>English language</li>
                  <li className={`${styles.li} pt-3`}>Italian language</li>
                  <li className={`${styles.li} pt-3`}>Spanish language</li>
                  <li className={`${styles.li} pt-3`}>Spanish language</li>
                  <li className={`${styles.li} pt-3`}>Equipment included</li>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-4">
            <motion.div
              whileHover={{ y: 30 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <div className="card text-center shadow-lg border-0">
                <div className="card-body p-5">
                  <h3 className={`${styles.h3} h4 fw-bold `}>Tourist guide</h3>
                  <p className="h3 pt-3">
                    $ <span className={`${styles.money} h1 fw-bold`}>100</span>
                  </p>
                  <p className={`${styles.para} card-text fw-semibold pt-3`}>
                    Per half day
                  </p>
                  <li className={`${styles.li} `}>Dedicated guide</li>
                  <li className={`${styles.li} pt-3`}>Great experience</li>
                  <li className={`${styles.li} pt-3`}>Cheap prices</li>
                  <li className={`${styles.li} pt-3`}>English language</li>
                  <li className={`${styles.li} pt-3`}>Italian language</li>
                  <li className={`${styles.li} pt-3`}>Spanish language</li>
                  <li className={`${styles.li} pt-3`}>Spanish language</li>
                  <li className={`${styles.li} pt-3`}>Equipment included</li>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCardSection;

import { motion } from "framer-motion";

const PriceCardSection = () => {
  return (
    <div className="container-fluid py-5 ">
      <div className="container">
        <div className="row container py-4 ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xxl-4 pb-5">
            <motion.div
              whileHover={{ y: 30 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <div className="card text-center shadow-lg border-0">
                <div className="card-body p-5">
                  <h3 className=" h4 mainColor fw-bold ">Tourist guide</h3>
                  <p className="h3 pt-3">
                    $ <span className=" h1 mainColor fw-bold">100</span>
                  </p>
                  <p className=" card-text mainColor fw-semibold pt-3">
                    Per half day
                  </p>
                  <li className="paraColor liStyleRm pt-3 ">Dedicated guide</li>
                  <li className="paraColor liStyleRm pt-3">Great experience</li>
                  <li className="paraColor liStyleRm pt-3">Cheap prices</li>
                  <li className="paraColor liStyleRm pt-3">English language</li>
                  <li className="paraColor liStyleRm pt-3">Italian language</li>
                  <li className="paraColor liStyleRm pt-3">Spanish language</li>
                  <li className="paraColor liStyleRm pt-3">Spanish language</li>
                  <li className="paraColor liStyleRm pt-3">
                    Equipment included
                  </li>
                </div>
              </div>
            </motion.div>
          </div>
          {/* card2 */}

          {/* card1 */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xxl-4 pb-5">
            <motion.div
              whileHover={{ y: 30 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <div className="card text-center shadow-lg border-0">
                <div className="card-body p-5">
                  <h3 className=" h4 mainColor fw-bold ">Tourist guide</h3>
                  <p className="h3 pt-3">
                    $ <span className=" h1 mainColor fw-bold">100</span>
                  </p>
                  <p className=" card-text mainColor fw-semibold pt-3">
                    Per half day
                  </p>
                  <li className="paraColor liStyleRm pt-3 ">Dedicated guide</li>
                  <li className="paraColor liStyleRm pt-3">Great experience</li>
                  <li className="paraColor liStyleRm pt-3">Cheap prices</li>
                  <li className="paraColor liStyleRm pt-3">English language</li>
                  <li className="paraColor liStyleRm pt-3">Italian language</li>
                  <li className="paraColor liStyleRm pt-3">Spanish language</li>
                  <li className="paraColor liStyleRm pt-3">Spanish language</li>
                  <li className="paraColor liStyleRm pt-3">
                    Equipment included
                  </li>
                </div>
              </div>
            </motion.div>
          </div>
          {/* card2 */}

          {/* card1 */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xxl-4 pb-5">
            <motion.div
              whileHover={{ y: 30 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <div className="card text-center shadow-lg border-0">
                <div className="card-body p-5">
                  <h3 className=" h4 mainColor fw-bold ">Tourist guide</h3>
                  <p className="h3 pt-3">
                    $ <span className=" h1 mainColor fw-bold">100</span>
                  </p>
                  <p className=" card-text mainColor fw-semibold pt-3">
                    Per half day
                  </p>
                  <li className="paraColor liStyleRm pt-3 ">Dedicated guide</li>
                  <li className="paraColor liStyleRm pt-3">Great experience</li>
                  <li className="paraColor liStyleRm pt-3">Cheap prices</li>
                  <li className="paraColor liStyleRm pt-3">English language</li>
                  <li className="paraColor liStyleRm pt-3">Italian language</li>
                  <li className="paraColor liStyleRm pt-3">Spanish language</li>
                  <li className="paraColor liStyleRm pt-3">Spanish language</li>
                  <li className="paraColor liStyleRm pt-3">
                    Equipment included
                  </li>
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

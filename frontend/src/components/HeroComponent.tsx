import { motion } from "framer-motion";

const HeroComponent = () => {
  return (
    <div className="container-fluid">
      <div className="container py-5">
        <div className="container pt-5">
          <div className=" pt-5">
            <div className="pt-5 ">
              <div className="pt-5 ">
                <motion.div>
                  <h1
                    className="pureWhite h1 fw-bolder"
                    style={{ fontSize: "70px" }}
                  >
                    THE TREK
                  </h1>
                </motion.div>

                <motion.div>
                  <h5 className="pureWhite  mt-3 h5">
                    TALENT WINS GAMES, BUT TEAMWORK WIN CHAMPIONSHIPS
                  </h5>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;

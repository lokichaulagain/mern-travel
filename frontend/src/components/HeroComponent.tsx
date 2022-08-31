import { motion } from "framer-motion";

const HeroComponent = () => {
  return (
    <div
      className="container  py-5"
      style={{ display: "flex", overflow: "hidden" }}
    >
      <div className="container py-5 px-5">
        <div className=" pt-5  px-4">
          <div className=" pt-5">
            <div className="container pt-5 ">
              <div className="container pt-5 ">
                <motion.div whileHover={{ scale: 1.2, x: 220 }}>
                  <h1 className="mainColor">THE TREK</h1>
                </motion.div>

                <motion.div
                  animate={{ x: 220 }}
                  transition={{ ease: "easeOut", duration: 5 }}
                >
                  <h5 className="paraColor">
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

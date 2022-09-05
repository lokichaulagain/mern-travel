import React from "react";
import { FaParachuteBox } from "react-icons/fa";
import { GiBee } from "react-icons/gi";
import { BiBarChart } from "react-icons/bi";
import { motion } from "framer-motion";

const TreksServiceCard = () => {
  return (
    <div style={{ backgroundColor: " white" }} className="container-fluid">
      <div className="container py-5">
        <div className="row container">
          <div className="row">
            <motion.div
              whileHover={{ scale: 0.95 }}
              className=" col col-12 col-sm-12 mt-4 col-md-12  col-lg-4 col-xl-4"
            >
              <FaParachuteBox className="iconLg mb-3 " />
              <div className="col">
                <h5 className="h5 mainColor">Experienced team</h5>
                <p className="paraColor">
                  We always lived inside our amazing nature
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 0.95 }}
              className=" col col-12  col-sm-12 mt-4 col-md-12 col-lg-4 col-xl-4"
            >
              <BiBarChart className="iconLg mb-3" />
              <div className="col">
                <h5 className="h5 mainColor">Career opportunities</h5>
                <p className="paraColor">
                  Grow with us is possible thanks to our levels structure.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 0.95 }}
              className=" col col-12 mt-4  col-sm-12 col-md-12 col-lg-4 col-xl-4"
            >
              <GiBee className="iconLg mb-3" />
              <div className="col">
                <h5 className="h5 mainColor">Meet amazing people</h5>
                <p className="paraColor ">
                  We are the best team ever! Funny and friendly with each other.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreksServiceCard;

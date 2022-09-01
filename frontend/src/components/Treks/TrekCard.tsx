import Image from "next/image";
import person1 from "../../../public/images/6.jpeg";
import { GrMapLocation } from "react-icons/gr";
import { motion } from "framer-motion";

const TrekCard = () => {
  return (
    <motion.div
      whileHover={{ y: 30 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="card   mb-5 border-0  shadow rounded"
      style={{ width: "22rem" }}
    >
      <Image src={person1} className=" rounded" alt="" />
      {/* small card */}
      <div className="card mx-2" style={{ backgroundColor: "#12314a" }}>
        <div className="card-body">
          <div className="row ">
            <div className="col-4">
              <h5 className="primaryColor h5">3</h5>
              <p className="whiteColor">Days</p>
            </div>
            <div className="col-4">
              <h5 className="primaryColor h5">13</h5>
              <p className="whiteColor">Group Size</p>
            </div>
            <div className="col-4">
              <h5 className="primaryColor h5">Medium</h5>
              <p className="whiteColor">Difficulty</p>
            </div>
          </div>
        </div>
      </div>
      {/* --------- */}
      <div className="card-body p-3">
        <h4 className="mainColor pt-3   h4 fw-bold">Bianco Excursion</h4>
        <p className="mainColor pt-3 lh-lg  card-text">
          This is a wider card with supporting text below as a natural village
          This is a wider card with supporting text below as a card with
          supporting text below.
        </p>
        <div className="col">
          <h6 className="primaryColor h6 ">
            <GrMapLocation
              style={{ fontSize: "20px" }}
              className="primaryColor me-4"
            />
            Monte bianco, Alpes Italy
          </h6>
        </div>
      </div>
    </motion.div>
  );
};

export default TrekCard;

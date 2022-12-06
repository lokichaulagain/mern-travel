import styles from "../../styles/scss/Home.module.scss";
import { BsFlower2 } from "react-icons/bs";
import { FaRegFlag } from "react-icons/fa";
import { MdOutlineEditLocationAlt } from "react-icons/md";
import { RiTreasureMapLine } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BiTime } from "react-icons/bi";
import { TbActivityHeartbeat } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
import { motion } from "framer-motion";

const HomeTopService = () => {
  const services = [
    {
      title: " Experienced Team ",
      description: " We provide you with an experienced team helping you throughout your journey to complete your trip with comfort and fun. ",
      icon: (
        <RiTeamFill
          className="primaryColor"
          size={40}
        />
      ),
    },

    {
      title: "Easy Planning",
      description: "The trip itineraries are planned to keep in mind your easiness and availability. You can also make changes by adding some extra days. ",
      icon: (
        <BsFlower2
          className="primaryColor"
          size={40}
        />
      ),
    },
    {
      title: "Expert Hikers",
      description: "We have a successful team of guides and experts who are very enthusiastic about trekking and hiking uphill ",
      icon: (
        <FaRegFlag
          className="primaryColor"
          size={40}
        />
      ),
    },

    {
      title: " Customized Tours  ",
      description: "We also provide the service of customized trips to the destination you prefer with your team.  ",
      icon: (
        <MdOutlineEditLocationAlt
          className="primaryColor"
          size={40}
        />
      ),
    },

    {
      title: "Personalized Service",
      description: "Besides a group, you can also take a personalized trip with our guide if you desire.",
      icon: (
        <BiTime
          className="primaryColor"
          size={40}
        />
      ),
    },
    {
      title: "Professional Support 24/7",
      description: " The ancient Himalayas is ready to provide you with 24/7 service throughout your journey as well as any other time you need us. ",
      icon: (
        <RiCustomerService2Fill
          className="primaryColor"
          size={40}
        />
      ),
    },
    {
      title: " Various Activities",
      description: "Besides trekking and hiking, we also provide other adventurous activities like Bungee, Paragliding, Rafting, and many more.",
      icon: (
        <TbActivityHeartbeat
          className="primaryColor"
          size={40}
        />
      ),
    },

    {
      title: " Secret locations",
      description: "Besides trekking and hiking, we also provide other adventurous activities like Bungee, Paragliding, Rafting, and many more.",
      icon: (
        <RiTreasureMapLine
          className="primaryColor"
          size={40}
        />
      ),
    },
  ];

  return (
    <div
      style={{ backgroundColor: "#fefeff" }}
      className="py-5 container-fluid">
      <div className="container my-5">
        <div className="row container ">
          <div className="row">
            <h2 className="h2 fw-bolder mainColor">TOP SERVICE</h2>
            <h5 className="h5 mainColor my-3">We provide the best experience</h5>
          </div>

          <div className="row">
            {services &&
              services.map((service: any, index: any) => (
                <div
                  key={index}
                  className="col-12 col-sm-12 col-md-6  col-lg-3 mt-5">
                  <motion.div
                    whileHover={{ scale: 0.9 }}
                    className={styles.iconDiv}>
                    {/* <GiWalkingBoot
                      className="primaryColor"
                      style={{ fontSize: "50px" }}
                    /> */}
                    {service.icon}

                    <h5 className="h5 mainColor mt-2 ">{service.title}</h5>
                    <p className="lh-base paraColor">{service.description}</p>
                  </motion.div>
                </div>
              ))}
          </div>

          {/* <div className="row">
            <div className="col-12 col-sm-12 col-md-6  col-lg-3 mt-5">
              <motion.div
                whileHover={{ scale: 0.9 }}
                className={styles.iconDiv}>
                <FaRegFlag
                  className="primaryColor"
                  style={{ fontSize: "50px" }}
                />
                <h5 className="h5 mainColor mt-2 ">Europe locations</h5>
                <p className="lh-base paraColor">Some quick example text to build on the card title and</p>
              </motion.div>
            </div>

            <div className="col-12 col-sm-12 col-md-6  col-lg-3 mt-5">
              <motion.div
                whileHover={{ scale: 0.9 }}
                className={styles.iconDiv}>
                <MdOutlineEditLocationAlt
                  className="primaryColor"
                  style={{ fontSize: "50px" }}
                />
                <h5 className="h5 mainColor mt-2 ">Visit us</h5>
                <p className="lh-base paraColor">Some quick example text to build on the card title and</p>
              </motion.div>
            </div>

            <div className="col-12 col-sm-12 col-md-6  col-lg-3 mt-5">
              <motion.div
                whileHover={{ scale: 0.9 }}
                className={styles.iconDiv}>
                <BsGlobe
                  className="primaryColor"
                  style={{ fontSize: "50px" }}
                />
                <h5 className="h5 mainColor mt-2 ">United States</h5>
                <p className="lh-base paraColor">Some quick example text to build on the card title and</p>
              </motion.div>
            </div>

            <div className="col-12 col-sm-12 col-md-6  col-lg-3 mt-5">
              <motion.div
                whileHover={{ scale: 0.9 }}
                className={styles.iconDiv}>
                <GiWaterfall
                  className="primaryColor"
                  style={{ fontSize: "50px" }}
                />
                <h5 className="h5 mainColor mt-2 ">Great waterfall</h5>
                <p className="lh-base paraColor">Some quick example text to build on the card title and</p>
              </motion.div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomeTopService;

import { motion } from "framer-motion";
import styles from "../../styles/scss/Home.module.scss";

const HomeNewsLetter = () => {
  return (
    <div className="container-fluid py-5 " style={{ backgroundColor: "#EFF2F7" }}  >
      <div className="container ">
        <div className="row container  ">
          <div className="row">
            <h2 className="h2 fw-bolder mainColor">NEWSLETTER</h2>
            <h6 className="h6 mainColor mt-3 ">
              Subscribe now to our newsletter
            </h6>
          </div>

          <div className="col col-12   col-lg-4 col-md-12 col-sm-12  mt-4">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Name"
            />
          </div>

          <div className="col col-12  col-lg-4 col-md-12 col-sm-12 mt-4">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Email"
            />
          </div>

          <div className="col  col-lg-4  d-grid gap-2 col-md-12 col-sm-12  mt-4">
            <motion.button
              whileHover={{ scale: 0.98 }}
              className={`${styles.customButton} btn  `}
              type="button"
            >
              Subscribe
            </motion.button>
          </div>
        </div>

        <div className="form-check ">
          <input
            className="form-check-input "
            type="checkbox"
            id="flexCheckChecked"
          />
          <p className="form-check-label  mt-4 paraColor">
            By click subscribe you accept the terms of service and the privacy
            policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeNewsLetter;

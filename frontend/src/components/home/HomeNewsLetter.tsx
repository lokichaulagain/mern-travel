import { motion } from "framer-motion";

const HomeNewsLetter = () => {
  return (
    <div style={{ backgroundColor: "#EFF2F7" }}>
      <div className="container p-5">
        <div className="container p-5">
          <div className="row ">
            <div className="row">
              <h2 className="h2 fw-bolder mainColor">NEWSLETTER</h2>
              <h6 className="h6 mainColor mt-3 mb-5">fmfjf-rmoud903  hsysy3deehe
                Subscribe now to our newsletter
              </h6>
            </div>

            <div className="col col-lg-4">
              <input

              // tThis is eh comment dndhdhlmmm49uuenru  '044 09u4  8yr eineniheeoijeije7 errrrrrrrrrrr     
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
              />
            </div>

            <div className="col col-lg-4">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
            </div>

            <div className="col col-lg-4  d-grid gap-2 ">
              <motion.button
                whileHover={{ scale: 0.98 }}
                className="btn customButton"
                type="button"
              >
                Subscribe
              </motion.button>
            </div>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
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
    </div>
  );
};

export default HomeNewsLetter;

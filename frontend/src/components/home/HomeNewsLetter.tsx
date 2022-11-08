import { motion } from "framer-motion";
import styles from "../../styles/scss/Home.module.scss";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

const HomeNewsLetter = () => {
  const mailSendSuccess = () => toast.success("Email send Successfully!");
  const mailSendError = () => toast.error("Field cannot be empty!");

  const [mail, setMail] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e: any) => {
    setMail((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSendMail = async (e: any) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:4000/api/contact", mail);
    setMail(res.data);
    mail.name != "" && mail.email != "" ? mailSendSuccess() : mailSendError();
    setMail({
      name: "",
      email: "",
    });
  };

  console.log(mail);

  return (
    <div
      className="container-fluid py-5 "
      style={{ backgroundColor: "#EFF2F7" }}>
      <div className="container ">
        <div className="row container  ">
          <div className="row">
            <h2 className="h2 fw-bolder mainColor">NEWSLETTER</h2>
            <h6 className="h6 mainColor mt-3 ">Subscribe now to our newsletter</h6>
          </div>

          <div className="col col-12   col-lg-4 col-md-12 col-sm-12  mt-4">
            <input
              type="text"
              name="name"
              value={mail.name}
              onChange={handleChange}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Name"
            />
          </div>

          <div className="col col-12  col-lg-4 col-md-12 col-sm-12 mt-4">
            <input
              type="email"
              value={mail.email}
              onChange={handleChange}
              name="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Email"
            />
          </div>

          <div className="col  col-lg-4  d-grid gap-2 col-md-12 col-sm-12  mt-4">
            {mail.name != "" && mail.email != "" ? (
              <motion.button
                onClick={handleSendMail}
                whileHover={{ scale: 0.98 }}
                className={`${styles.customButton} btn  `}
                type="submit">
                Subscribe
              </motion.button>
            ) : (
              <motion.button
              onClick={()=>mailSendError()}
                whileHover={{ scale: 0.98 }}
                className={`${styles.customButton} btn  `}
                type="submit">
                Subscribe
              </motion.button>
            )}
          </div>
        </div>

        <div className="form-check ms-3 ">
          <input
            className="form-check-input  "
            type="checkbox"
            id="flexCheckChecked"
          />
          <p className="form-check-label   mt-4 paraColor">By click subscribe you accept the terms of service and the privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeNewsLetter;

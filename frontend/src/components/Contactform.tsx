import React, { useState } from "react";
import style from "../styles/scss/Contactform.module.scss";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";

const Contactform = () => {
  const mailSendSuccess = () => toast.success("Email send Successfully!");
  const mailSendError = () => toast.error("Field cannot be empty!");

  const [mail, setMail] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setMail((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSendMail = async (e: any) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:4000/api/contact", mail);
    setMail(res.data);
    mail.name != "" && mail.email != "" && mail.message != "" ? mailSendSuccess() : mailSendError();
    setMail({
      name: "",
      email: "",
      message: "",
    });
  };

  console.log(mail);

  return (
    <div className={`${style.formBody} container mb-5`}>
      <div className="row g-5">
        <form className={`${style.contactForm} col-md-7`}>
          <div className={style.title}>
            <h4>WRITE US</h4>
            <p>Contact us from here</p>
          </div>
          <div className="mb-3">
            <label
              htmlFor="name"
              className="form-label">
              Full Name
            </label>
            <input
              required
              type="text"
              name="name"
              value={mail.name}
              onChange={handleChange}
              id="name"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="form-label">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              value={mail.email}
              onChange={handleChange}
              id="email"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="message"
              className="form-label">
              Message
            </label>
            <textarea
              required
              name="message"
              value={mail.message}
              onChange={handleChange}
              className="form-control"
              id="exampleFormControlTextarea1"
            />
          </div>

          {mail.name != "" && mail.email != "" && mail.message != "" ? (
            <button
              onClick={handleSendMail}
              type="submit"
              className="btn btn-primary">
              Send Message
            </button>
          ) : (
            <button
              onClick={() => mailSendError()}
              type="submit"
              className="btn btn-primary">
              Send Message
            </button>
          )}
        </form>
        <div className={`${style.contactInfo} col`}>
          <div className={style.infoTitle}>
            <h4>CONTACTS</h4>
            <p>Information</p>
          </div>
          <div className={style.info}>
            <div className={style.infoText}>
              <h6>Address</h6>
              <p>Kathmandu, Nepal</p>
            </div>
            <div className={style.infoText}>
              <h6>Web</h6>
              <p>website.com</p>
            </div>
            <div className={style.infoText}>
              <h6>Phone</h6>
              <p>(+977) 980000000</p>
            </div>
            <div className={style.infoText}>
              <h6>Skype</h6>
              <p>skype.name</p>
            </div>
            <div
              className="btn-group mt-4"
              role="group">
              <button className={`${style.myButton}`}>
                <BsFacebook
                  fontSize="1.3em"
                  style={{ color: "#379cf4" }}
                />
              </button>
              <button className={`${style.myButton}`}>
                <BsTwitter
                  fontSize="1.3em"
                  style={{ color: "#379cf4" }}
                />
              </button>
              <button className={`${style.myButton}`}>
                <BsInstagram
                  fontSize="1.3em"
                  style={{ color: "#379cf4" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;

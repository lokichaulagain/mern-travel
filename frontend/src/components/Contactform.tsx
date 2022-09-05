import React from "react";
import style from "../styles/scss/Contactform.module.scss";

const Contactform = () => {
  return (
    <div className={`${style.formBody} container mb-5`}>
      <div className="row g-5">
        <form className={`${style.contactForm} col-md-7`}>
          <div className={style.title}>
            <h4>WRITE US</h4>
            <p>Contact us from here</p>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
            ></textarea>
          </div>
          <button className="btn btn-primary">Send Message</button>
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
            <div className="btn-group mt-4" role="group">
              <button className="btn btn-primary">FB</button>
              <button className="btn btn-primary">FB</button>
              <button className="btn btn-primary">FB</button>
              <button className="btn btn-primary">FB</button>
              <button className="btn btn-primary">FB</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;

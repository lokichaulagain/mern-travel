import React from "react";
import styles from "../styles/scss/Newsletter.module.scss";

const NewsLetter = () => {
  return (
    <div className={`${styles.newsLetter} container-fluid`}>
      <div className="container px-5">
        <div className="container px-5">
          <div className="row px-3">
            <div className={styles.headingDiv}>
              <span className="heading1">NEWSLETTER</span>
              <span className="heading2">Subscribe now to our newsletter</span>
            </div>

            <div className="col col-lg-4">
              <input
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
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
            
          </div>

          <div className={`${styles.checkBoxDiv} form-check`}>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              By click subscribe you accept the terms of service and the privacy
              policy.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

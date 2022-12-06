import React, { useState } from "react";
import style from "../styles/scss/Contactform.module.scss";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Contactform = () => {
  const mailSendSuccess = () => toast.success("We will notify our updates");
  const sendMailError = () => toast.error("Something Went Wrong");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();

  const sendMail = async () => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contact`, handleAllField);
      mailSendSuccess();
      console.log("Mail send successfully");
      reset();
    } catch (error) {
      console.log(error);
      sendMailError();
    }
  };

  return (
    <div className={`${style.formBody} container mb-5`}>
      <div className="row g-5">
        <form
          onSubmit={handleSubmit(sendMail)}
          className={`${style.contactForm} col-md-7`}>
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
              type="text"
              {...register("name", { required: true })}
              className="form-control"
              placeholder="Full Name"
            />
            {errors.name && <span className="field_required_warning">This field is required</span>}
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="form-label">
              Email
            </label>
            <input
              type="text"
              {...register("email", { required: true })}
              className="form-control"
              placeholder="Email Address"
            />
            {errors.email && <span className="field_required_warning">This field is required</span>}
          </div>
          <div className="mb-3">
            <label
              htmlFor="message"
              className="form-label">
              Message
            </label>
            <textarea
              {...register("message", { required: true })}
              className="form-control"
              placeholder="Message"
            />
            {errors.message && <span className="field_required_warning">This field is required</span>}
          </div>
          <button
            type="submit"
            className="btn btn-primary w-25">
            Send
          </button>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;

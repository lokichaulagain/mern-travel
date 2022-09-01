import React from "react";
import Image from "next/image";
import img3 from "../../../public/images/3.jpeg";
import EventImageCard from "./EventImageCard";
import { FaSearchLocation } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import { RiCalendar2Fill } from "react-icons/ri";
import { motion } from "framer-motion";

const EventCard = () => {
  return (
    <div className="container py-5 ">
      <div className="container row ">
        <div className="col-9  col-xl-9 col-lg-8 col-md-12">
          {/* Card */}
          <motion.div
            whileHover={{ scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
            className="card mb-3 shadow-sm border-0"
          >
            <div className="row g-0">
              <div className="col-md-4">
                <Image src={img3} className="img-fluid " alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="mainColor h2 fw-semibold">
                    Sunshine and wine
                  </h2>
                  <h6 className="mainColor h6 pt-2 pb-3">
                    <RiCalendar2Fill
                      className="primaryColor"
                      style={{ fontSize: "20px" }}
                    />{" "}
                    01 October 2019 at 8.00 PM
                  </h6>
                  <hr />
                  <p className="paraColor lh-lg ">
                    Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                    eiusmod tempor incididunt utlabore et dolore magna aliqua.
                    Utenim ad minim veniam quis nostrud exercitation ullamco
                    laboris.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          {/*  */}

          {/* Card */}
          <motion.div
            whileHover={{ scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
            className="card mb-3 shadow-sm border-0"
          >
            <div className="row g-0">
              <div className="col-md-4">
                <Image src={img3} className="img-fluid " alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="mainColor h2 fw-semibold">
                    Sunshine and wine
                  </h2>
                  <h6 className="mainColor h6 pt-2 pb-3">
                    <RiCalendar2Fill
                      className="primaryColor"
                      style={{ fontSize: "20px" }}
                    />{" "}
                    01 October 2019 at 8.00 PM
                  </h6>
                  <hr />
                  <p className="paraColor lh-lg ">
                    Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                    eiusmod tempor incididunt utlabore et dolore magna aliqua.
                    Utenim ad minim veniam quis nostrud exercitation ullamco
                    laboris.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          {/*  */}

          {/* Card */}
          <motion.div
            whileHover={{ scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
            className="card mb-3 shadow-sm border-0"
          >
            <div className="row g-0">
              <div className="col-md-4">
                <Image src={img3} className="img-fluid " alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="mainColor h2 fw-semibold">
                    Sunshine and wine
                  </h2>
                  <h6 className="mainColor h6 pt-2 pb-3">
                    <RiCalendar2Fill
                      className="primaryColor"
                      style={{ fontSize: "20px" }}
                    />{" "}
                    01 October 2019 at 8.00 PM
                  </h6>
                  <hr />
                  <p className="paraColor lh-lg ">
                    Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                    eiusmod tempor incididunt utlabore et dolore magna aliqua.
                    Utenim ad minim veniam quis nostrud exercitation ullamco
                    laboris.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          {/*  */}

          {/* Card */}
          <motion.div
            whileHover={{ scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
            className="card mb-3 shadow-sm border-0"
          >
            <div className="row g-0">
              <div className="col-md-4">
                <Image src={img3} className="img-fluid " alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="mainColor h2 fw-semibold">
                    Sunshine and wine
                  </h2>
                  <h6 className="mainColor h6 pt-2 pb-3">
                    <RiCalendar2Fill
                      className="primaryColor"
                      style={{ fontSize: "20px" }}
                    />{" "}
                    01 October 2019 at 8.00 PM
                  </h6>
                  <hr />
                  <p className="paraColor lh-lg ">
                    Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                    eiusmod tempor incididunt utlabore et dolore magna aliqua.
                    Utenim ad minim veniam quis nostrud exercitation ullamco
                    laboris.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          {/*  */}
        </div>

        {/*Two  Icon Card */}
        <div className="col col-xl-3 col-md-12 col-lg-3 ">
          <div className="gap-5">
            <EventImageCard />

            <div className="card p-3   border-0 shadow my-5" style={{ width: "18rem" }}>
              <div className="card-body">
                <FaSearchLocation
                  className="primaryColor"
                  style={{ fontSize: "45px" }}
                />
                <h5 className="mainColor h5 pt-3">Event organizers</h5>
                <p className="paraColor card-text lh-base pt-1">
                  We are searching for event organizers
                </p>
              </div>
            </div>

            {/*  */}
            <div className="card p-3 border-0 shadow " style={{ width: "18rem" }}>
              <div className="card-body">
                <TbMessages
                  className="primaryColor"
                  style={{ fontSize: "45px" }}
                />
                <h5 className="mainColor h5 pt-3">Need help?</h5>
                <p className="paraColor card-text lh-base pt-1">
                  Contact us if have any event inquery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

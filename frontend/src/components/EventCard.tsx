import React from "react";
import Image from "next/image";
import img3 from "../../public/images/3.jpeg";
import EventImageCard from "./Events/EventImageCard";
import styles from "../styles/scss/event/EventCard.module.scss";
import { FaSearchLocation } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import { RiCalendar2Fill } from "react-icons/ri";

const EventCard = () => {
  return (
    <div className="wrapper py-5">
      <div className="container px-5">
        <div className="container py-5 px-5">
          <div className="row">
            <div className="col-8">
              {/* Card */}
              <div className="card mb-3 shadow-sm border-0">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image src={img3} className="img-fluid " alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className={`${styles.h2} h2 fw-semibold`}>
                        Sunshine and wine
                      </h2>
                      <h6 className={`${styles.h6} h6 pt-2 pb-3`}>
                      <RiCalendar2Fill className={`${styles.iconSm}`} />  01 October 2019 at 8.00 PM
                      </h6>
                      <hr />
                      <p className={`${styles.para} lh-lg `}>
                        Lorem ipsum dolor sit amet consectetur adipiscing
                        elitsed do eiusmod tempor incididunt utlabore et dolore
                        magna aliqua. Utenim ad minim veniam quis nostrud
                        exercitation ullamco laboris.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}

              {/* Card */}
              <div className="card mb-3 shadow-sm border-0">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image src={img3} className="img-fluid " alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className={`${styles.h2} h2 fw-semibold`}>
                        Sunshine and wine
                      </h2>
                      <h6 className={`${styles.h6} h6 pt-2 pb-3`}>
                        <RiCalendar2Fill className={`${styles.iconSm}`} /> 01
                        October 2019 at 8.00 PM
                      </h6>
                      <hr />
                      <p className={`${styles.para} lh-lg `}>
                        Lorem ipsum dolor sit amet consectetur adipiscing
                        elitsed do eiusmod tempor incididunt utlabore et dolore
                        magna aliqua. Utenim ad minim veniam quis nostrud
                        exercitation ullamco laboris.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}

              {/* Card */}
              <div className="card mb-3 shadow-sm border-0">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image src={img3} className="img-fluid " alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className={`${styles.h2} h2 fw-semibold`}>
                        Sunshine and wine
                      </h2>
                      <h6 className={`${styles.h6} h6 pt-2 pb-3`}>
                      <RiCalendar2Fill className={`${styles.iconSm}`} /> 01 October 2019 at 8.00 PM
                      </h6>
                      <hr />
                      <p className={`${styles.para} lh-lg `}>
                        Lorem ipsum dolor sit amet consectetur adipiscing
                        elitsed do eiusmod tempor incididunt utlabore et dolore
                        magna aliqua. Utenim ad minim veniam quis nostrud
                        exercitation ullamco laboris.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}

              {/* Card */}
              <div className="card mb-3 shadow-sm border-0">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image src={img3} className="img-fluid " alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className={`${styles.h2} h2 fw-semibold`}>
                        Sunshine and wine
                      </h2>
                      <h6 className={`${styles.h6} h6 pt-2 pb-3`}>
                      <RiCalendar2Fill className={`${styles.iconSm}`} />  01 October 2019 at 8.00 PM
                      </h6>
                      <hr />
                      <p className={`${styles.para} lh-lg `}>
                        Lorem ipsum dolor sit amet consectetur adipiscing
                        elitsed do eiusmod tempor incididunt utlabore et dolore
                        magna aliqua. Utenim ad minim veniam quis nostrud
                        exercitation ullamco laboris.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>

            <div className="col ">
              <div className="gap-5">
                <EventImageCard />

                <div
                  className="card p-3 border-0 shadow my-5"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <FaSearchLocation className={`${styles.iconLg}`} />
                    <h5 className={`${styles.h5} h5 pt-3`}>Event organizers</h5>
                    <p className={`${styles.para} card-text lh-base pt-1`}>
                      We are searching for event organizers
                    </p>
                  </div>
                </div>

                {/*  */}
                <div
                  className="card p-3 border-0 shadow "
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <TbMessages className={`${styles.iconLg}`} />
                    <h5 className={`${styles.h5} h5 pt-3`}>Need help?</h5>
                    <p className={`${styles.para} card-text lh-base pt-1`}>
                      Contact us if have any event inquery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

import React from "react";
import styles from "../../styles/scss/event/EventImageCard.module.scss";

const EventImageCard = () => {
  return (
    <div className="col-3">
      <div
        className={`${styles.bg} card pt-5 p-3 border-0 shadow-sm`}
        style={{ width: "18rem" }}
      >
        <div className="card-body pt-5 ">
          <div className="pt-5">
            <h4 className={`${styles.color} h4 pt-5 fw-semibold`}>
              Sound of silence
            </h4>
            <h6 className={`${styles.color} h6 pt-2 pb-3`}>
              01 October 2019 at 8.00 PM
            </h6>
            <hr className={`${styles.hr} `} />
            <p className={`${styles.color} lh-lg `}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventImageCard;

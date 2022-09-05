import React from "react";
import styles from "../../styles/scss/Event.module.scss";

const EventImageCard = () => {
  return (
    <div className="col col-12 col-sm-12 ">
      <div className={`${styles.cardBg} card pt-5 co border-0 shadow-sm`}>
        <div className="card-body pt-5 ">
          <div className="pt-5">
            <h4 className="pureWhite h4 pt-5 fw-semibold">Sound of silence</h4>
            <h6 className="pureWhite h6 pt-2 pb-3">
              01 October 2019 at 8.00 PM
            </h6>
            <hr />
            <p className="pureWhite lh-lg ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventImageCard;

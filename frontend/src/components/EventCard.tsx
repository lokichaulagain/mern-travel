import React from "react";
import Image from "next/image";
import img3 from "../../public/images/3.jpeg";
import EventImageCard from "./Events/EventImageCard";

const EventCard = () => {
  return (
    <div className="wrapper">
      <div className="container px-5">
        <div className="container px-5" style={{ display: "flex" }}>
          <div className="col-9">
            <div className="row px-3">
              <div className="d-flex position-relative">
                <Image
                  src={img3}
                  height="50px"
                  width="500px"
                  className="rounded mx-auto d-block"
                  alt="..."
                />

                <div>
                  <h2>Sunsine and wine</h2>
                  <span>01 October 2022 at 8:00 PM</span>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque sequi laborum non porro, cupiditate facilis impedit
                    illum, quisquam consectetur recusandae aut voluptatibus.
                    Beatae autem
                  </p>
                </div>
              </div>
            </div>
          </div>

          <EventImageCard />
        </div>
      </div>
    </div>
  );
};

export default EventCard;

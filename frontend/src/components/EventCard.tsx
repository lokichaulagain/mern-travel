import React from "react";
import Image from "next/image";
import img3 from "../../public/images/3.jpeg";

const EventCard = () => {
  return (
    <div className="container px-5">
      <div className="container px-5" style={{ display: "flex" }}>
        <div className="col-9">
          <div className="row px-3">
            {/* <Image
              src={img3}
              height="50px"
              width="300px"
              className="rounded mx-auto d-block"
              alt="..."
            />

            <div className="col">
              <h2>Sunsine and wine</h2>
              <span>01 October 2022 at 8:00 PM</span>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                sequi laborum non porro, cupiditate facilis impedit illum,
                quisquam consectetur recusandae aut voluptatibus. Beatae autem
              </p>
            </div> */}

            <div className="d-flex position-relative">
              {/* <img src="..." className="flex-shrink-0 me-3" alt="..."> */}

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

        <div className="col-3">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h2>Sound of silence</h2>
              <span>01 March 2022 at 8 PM</span>
              <hr />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
          {/* Event organizer card */}
        </div>
      </div>
    </div>
  );
};

export default EventCard;

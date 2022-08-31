import Image from "next/image";
import React from "react";
import person1 from "../../../public/person/1.avif";
import { motion } from "framer-motion";

const TeamMemberCard = () => {
  return (
    <div className="container py-5 px-5">
      <div className="container pt-4 px-5">
        <div className="row px-3">
          {/* Card1 */}
          <div className=" col-6 mb-5  ">
            <div className=" d-flex shadow-sm ">
              <Image
                src={person1}
                className="  flex-shrink-0 me-3 teamImg"
                alt="..."
              />

              <div className="col-7">
                <h3 className="h3 mainColor">Lokendra Chaulagain</h3>
                <h6 className="h6 mainColor">MERN Dtack Developer</h6>
                <p className="paraColor">
                  This is some placeholder content for the custom component. It
                  is intended to mimic what some real-world content would look
                  like,
                </p>

                <a className="link" href={"https://www.facebook.com"}>
                  Social Link
                </a>
              </div>
            </div>
          </div>
          {/* Card2 */}

          <div className="col-6">
            <div className=" d-flex shadow-sm ">
              <Image
                src={person1}
                className="  flex-shrink-0 me-3 teamImg"
                alt="..."
              />

              {/* </div> */}
              <div className="col-7">
                <h3 className="h3 mainColor">Lokendra Chaulagain</h3>
                <h6 className="h6 mainColor">MERN Dtack Developer</h6>
                <p className="paraColor">
                  This is some placeholder content for the custom component. It
                  is intended to mimic what some real-world content would look
                  like,
                </p>
                <a className="link" href={"https://www.facebook.com"}>
                  Social Link
                </a>
              </div>
            </div>
          </div>

          {/* Card3 */}

          <div className="col-6">
            <div className="d-flex shadow-sm ">
              <Image
                src={person1}
                className="  flex-shrink-0 me-3 teamImg"
                alt="..."
              />
              <div className="col-7">
                <h3 className="h3 mainColor">Lokendra Chaulagain</h3>
                <h6 className="h6 mainColor">MERN Dtack Developer</h6>
                <p className="paraColor">
                  This is some placeholder content for the custom component. It
                  is intended to mimic what some real-world content would look
                  like,
                </p>
                <a className="link" href={"https://www.facebook.com"}>
                  Social Link
                </a>
              </div>
            </div>
          </div>

          {/* Card4 */}

          <div className="col-6">
            <motion.div
              drag
              dragConstraints={{
                top: -0,
                left: -0,
                right: 0,
                bottom: 0,
              }}
            >
              <div className="d-flex shadow-sm ">
                <Image
                  src={person1}
                  className="  flex-shrink-0 me-3 teamImg"
                  alt="..."
                />
                <div className="col-7">
                  <h3 className="h3 mainColor">Lokendra Chaulagain</h3>
                  <h6 className="h6 mainColor">MERN Dtack Developer</h6>
                  <p className="paraColor">
                    This is some placeholder content for the custom component.
                    It is intended to mimic what some real-world content would
                    look like,
                  </p>
                  <a className="link" href={"https://www.facebook.com"}>
                    Social Link
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;

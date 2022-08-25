import Image from "next/image";
import React from "react";
import img1 from "../../../public/images/1.jpeg";
import styles from "../../styles/scss/Team.module.scss";
import person1 from "../../../public/person/1.avif";
import person2 from "../../../public/person/2.avif";
import person3 from "../../../public/person/3.avif";
import person4 from "../../../public/person/4.avif";

const TeamMemberCard = () => {
  return (
    <div className={`${styles.wrapper} container px-5`}>
      <div className="container px-5">
        <div className="row px-3">
          {/* Card1 */}
          <div className="col-6 mb-5">
            <div className="d-flex position-relative">
              <Image
                src={person1}
                className={`${styles.teamImg}  flex-shrink-0 me-3`}
                alt="..."
              />

              <div className="col-7">
                <h3>Lokendra Chaulagain</h3>
                <h6>MERN Dtack Developer</h6>
                <p>
                  This is some placeholder content for the custom component. It
                  is intended to mimic what some real-world content would look
                  like,
                </p>
                <a href="#" className="stretched-link">
                  Social Link
                </a>
              </div>
            </div>
          </div>
          {/* Card2 */}

          <div className="col-6">
            <div className="d-flex position-relative">
              <Image
                src={person1}
                className={`${styles.teamImg}  flex-shrink-0 me-3`}
                alt="..."
              />

              {/* </div> */}
              <div className="col-7">
                <h3>Lokendra Chaulagain</h3>
                <h6>MERN Dtack Developer</h6>
                <p>
                  This is some placeholder content for the custom component. It
                  is intended to mimic what some real-world content would look
                  like,
                </p>
                <a href="#" className="stretched-link">
                  Social Link
                </a>
              </div>
            </div>
          </div>

          {/* Card3 */}

          <div className="col-6">
            <div className="d-flex position-relative">
              <Image
                src={person1}
                className={`${styles.teamImg}  flex-shrink-0 me-3`}
                alt="..."
              />
              <div className="col-7">
                <h3>Lokendra Chaulagain</h3>
                <h6>MERN Dtack Developer</h6>
                <p>
                  This is some placeholder content for the custom component. It
                  is intended to mimic what some real-world content would look
                  like,
                </p>
                <a href="#" className="stretched-link">
                  Social Link
                </a>
              </div>
            </div>
          </div>

          {/* Card4 */}

          <div className="col-6">
            <div className="d-flex position-relative">
              <Image
                src={person1}
                className={`${styles.teamImg}  flex-shrink-0 me-3`}
                alt="..."
              />
              <div className="col-7">
                <h3>Lokendra Chaulagain</h3>
                <h6>MERN Dtack Developer</h6>
                <p>
                  This is some placeholder content for the custom component. It
                  is intended to mimic what some real-world content would look
                  like,
                </p>
                <a href="#" className="stretched-link">
                  Social Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;

import Image from "next/image";
import React from "react";
import person1 from "../../../public/person/1.avif";
import styles from "../../styles/scss/team/TeamMemberCard.module.scss";

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
                className={`${styles.teamImg}  flex-shrink-0 me-3`}
                alt="..."
              />

              <div className="col-7">
                <h3 className="h3">Lokendra Chaulagain</h3>
                <h6 className="h6">MERN Dtack Developer</h6>
                <p className={` ${styles.para}`}>
                  This is some placeholder content for the custom component. It
                  is intended to mimic what some real-world content would look
                  like,
                </p>

                <a className={styles.link} href={"https://www.facebook.com"}>
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
                className={`${styles.teamImg}  flex-shrink-0 me-3`}
                alt="..."
              />

              {/* </div> */}
              <div className="col-7">
                <h3 className="h3">Lokendra Chaulagain</h3>
                <h6 className="h6">MERN Dtack Developer</h6>
                <p className={` ${styles.para}`}>
                  This is some placeholder content for the custom component. It
                  is intended to mimic what some real-world content would look
                  like,
                </p>
                <a className={styles.link} href={"https://www.facebook.com"}>
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
                className={`${styles.teamImg}  flex-shrink-0 me-3`}
                alt="..."
              />
              <div className="col-7">
                <h3 className="h3">Lokendra Chaulagain</h3>
                <h6 className="h6">MERN Dtack Developer</h6>
                <p className={` ${styles.para}`}>
                  This is some placeholder content for the custom component. It
                  is intended to mimic what some real-world content would look
                  like,
                </p>
                <a className={styles.link} href={"https://www.facebook.com"}>
                  Social Link
                </a>
              </div>
            </div>
          </div>

          {/* Card4 */}
          <div className="col-6">
            <div className="d-flex shadow-sm ">
              <Image
                src={person1}
                className={`${styles.teamImg}  flex-shrink-0 me-3`}
                alt="..."
              />
              <div className="col-7">
                <h3 className="h3">Lokendra Chaulagain</h3>
                <h6 className="h6">MERN Dtack Developer</h6>
                <p className={` ${styles.para}`}>
                  This is some placeholder content for the custom component. It
                  is intended to mimic what some real-world content would look
                  like,
                </p>
                <a className={styles.link} href={"https://www.facebook.com"}>
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

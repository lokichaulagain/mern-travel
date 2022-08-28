import Image from "next/image";
import person1 from "../../../public/person/1.avif";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmbulance } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/scss/singleTrek/SingleTrekComponent1.module.scss";

const SingleTrekComponent1 = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="container p-5  ">
        <div className="container p-5">
          <div className="row  px-2">
            <div className="col">
              <p className={`${styles.para} lh-lg `}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam porro optio sapiente ad velit, possimus nesciunt sed
                ducimus magnam molestias fugit incidunt dolore! Laborum
                repellendus architecto, officiis laudantium labore sequi
                aspernatur quos neque eligendi dolor!in voluptate velit esse
                cillum dolore eu fadipisis nisi ut aliquip ex ea aliquip ex rud
                exercitation ullamco lcon commodo consequat.
              </p>
            </div>

            <div className="col ">
              <div className="row">
                <div className="col-5">
                  <Image
                    src={person1}
                    className={`${styles.personImg}  flex-shrink-0 me-3`}
                    alt="..."
                  />
                </div>

                <div className="col-7">
                  <h3 className={`${styles.color} h3`}>Mountain guide</h3>
                  <h6 className={`${styles.color} h6`}>Lokendra Chaulagain</h6>
                  <hr />
                  <p className={`${styles.para} lh-lg`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto laborum.
                  </p>
                  <a href="#" className="link">
                    Social Link
                  </a>
                </div>
              </div>
            </div>

            {/*Button Nationality */}
            <div className="row mb-5">
              <div className="col">
                <button
                  type="button"
                  className="btn fw-semibold fs-6 customButton  mt-4  shadow-sm  btn-primary rounded-pill py-3  px-5 btn-lg  "
                >
                  Book for $95
                </button>
              </div>

              <div className="col">
                <div className="row">
                  <div className="col">
                    <h5 className={`${styles.color} h5`}>Nationality</h5>
                    <p className={`${styles.color} `}>Nepali</p>
                  </div>

                  <div className="col">
                    <h5 className={`${styles.color} h5`}>Language</h5>
                    <p className={`${styles.color} `}>English</p>
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

export default SingleTrekComponent1;

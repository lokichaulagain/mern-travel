import Image from "next/image";
import person1 from "../../../public/person/1.avif";
import styles from "../../styles/scss/singleTrek/SingleTrek.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmbulance } from "@fortawesome/free-solid-svg-icons";

const SingleTrekComponent1 = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="container px-5  ">
        <div className="container px-5">
          <div className="row my-5 px-4">
            <div className="row my-5">
              <div className="col">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam porro optio sapiente ad velit, possimus nesciunt sed
                ducimus magnam molestias fugit incidunt dolore! Laborum
                repellendus architecto, officiis laudantium labore sequi
                aspernatur quos neque eligendi dolor!in voluptate velit esse
                cillum dolore eu fadipisis nisi ut aliquip ex ea aliquip ex rud
                exercitation ullamco lcon commodo consequat.
              </div>

              <div className="col">
                <div className="col mb-5">
                  <div className="d-flex position-relative">
                    <Image
                      src={person1}
                      className={`${styles.personImg}  flex-shrink-0 me-3`}
                      alt="..."
                    />

                    <div className="col-7">
                      <h3>Mountain guide</h3>
                      <h6>Lokendra Chaulagain</h6>
                      <hr />
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iusto laborum.
                      </p>
                      <a href="#" className="stretched-link">
                        Social Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Button Nationality */}
            <div className="row mb-5">
              <div className="col">
                <button
                  type="button"
                  className="btn btn-primary btn-lg rounded-pill px-4 py-3"
                >
                  Book for $95
                </button>
              </div>

              <div className="col">
                <div className="row">
                  <div className="col">
                    <h5>Nationality</h5>
                    <p>Nepali</p>
                  </div>

                  <div className="col">
                    <h5>Language</h5>
                    <p>English</p>
                  </div>
                  <div className="col" style={{ display: "flex" }}>
                    <FontAwesomeIcon icon={faAmbulance} />
                    <FontAwesomeIcon icon={faAmbulance} />
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

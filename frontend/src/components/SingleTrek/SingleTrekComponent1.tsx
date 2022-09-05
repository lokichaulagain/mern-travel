import Image from "next/image";
import person1 from "../../../public/person/1.avif";
import styles from "../../styles/scss/SingleTrek.module.scss";

const SingleTrekComponent1 = () => {
  return (
    <div style={{ backgroundColor: "white" }} className="container-fluid">
      <div className="container pb-3">
        <div className="row container py-5">
          <div className="col-12 mb-5 col-sm-12  col-md-12 col-lg-6 ">
            <p className="mainColor lh-lg ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam porro optio sapiente ad velit, possimus nesciunt sed
              ducimus magnam molestias fugit incidunt dolore! Laborum
              repellendus architecto, officiis laudantium labore sequi
              aspernatur quos neque eligendi dolor!in voluptate velit esse
              cillum dolore eu fadipisis nisi ut aliquip ex ea aliquip ex rud
              exercitation ullamco lcon commodo consequat. repellendus
              architecto, officiis laudantium labore sequi aspernatur quos neque
              eligendi dolor!in voluptate velit esse cillum dolore eu fadipisis
              nisi ut aliquip ex ea aliquip ex rud exercitation ullamco lcon
              commodo consequat.
            </p>
          </div>

          <div className="col col-sm-12 col-md-12 col-lg-6">
            <div className="row">
              <div className="col col-12 col-md-5 col-lg-5 col-xl-5 mb-4 ">
                <Image src={person1} alt="..." />
              </div>

              <div className="col-12 col-md-7 ">
                <h3 className="mainColor h3">Mountain guide</h3>
                <h6 className="mainColor h6">Lokendra Chaulagain</h6>
                <hr />
                <p className="mainColor lh-lg ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  laborum.
                </p>
                <a href="https://falcontechnepal.com" className="link">
                  Social Link
                </a>
              </div>
              <div className="row mt-4 ">
                <div className="col ">
                  <h5 className="mainColor h5">Nationality</h5>
                  <p className="mainColor ">Nepali</p>
                </div>

                <div className="col">
                  <h5 className="mainColor h5">Language</h5>
                  <p className="mainColor ">English</p>
                </div>

                <div className="mt-3 col-12 col-sm-12 col-md-12  col-lg-12 col-xl-12">
                  <button
                    type="button"
                    className={`${styles.customButton} btn fw-semibold customButton shadow-sm rounded-pill btn-lg`}
                  >
                    Book for $95
                  </button>
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

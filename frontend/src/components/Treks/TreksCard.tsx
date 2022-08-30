import Image from "next/image";
import img1 from "../../../public/images/1.jpeg";
import styles from "../../styles/scss/Treks.module.scss";

const TreksCard = () => {
  return (
    <div className={`${styles.wrapper} pb-5`}>
      <div className="container pb-5 px-5">
        <div className="container pb-5 px-5">
          <div className="card-group px-3">
            {/* <div className="col col-lg-4">
              <div
                className="card border-0 shadow mt-3 mb-4"
                style={{ width: "22rem", overflow: "hidden" }}
              >
                <Image src={img1} className="rounded-1" alt="" />

               
                <div className={`${styles.smallCard} card mx-4`}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-4">
                        <h5 className={`${styles.h5} h5`}>3</h5>
                        <h6 className={`${styles.h6} h6 `}>Days</h6>
                      </div>
                      <div className="col-4">
                        <h5 className={`${styles.h5} h5`}>3</h5>
                        <h6 className={`${styles.h6} h6 `}>Days</h6>
                      </div>
                      <div className="col-4">
                        <h5 className={`${styles.h5} h5`}>3</h5>
                        <h6 className={`${styles.h6} h6 `}>Days</h6>
                      </div>
                    </div>
                  </div>
                </div>
              
                <div className="card-body">
                  <h3 className="h3 pt-3">Bianco Excursion</h3>
                  <p className="card-text pt-3 text-muted ">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <p className={`${styles.cardLink} pt-4`}>
                      Monte bianco, Alpes Italy
                    </p>
                  </p>
                </div>
              </div>
            </div> */}

            {/* <div className="col col-lg-4">
              <div className="card mt-3 mb-4 " style={{ width: "20rem" }}>
                <Image src={img1} alt="" />
              

                <div className={`${styles.smallCard} card mx-4`}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-4">
                        <h5 className={`${styles.h5} h5`}>3</h5>
                        <h6 className={`${styles.h6} h6 `}>Days</h6>
                      </div>
                      <div className="col-4">
                        <h5 className={`${styles.h5} h5`}>3</h5>
                        <h6 className={`${styles.h6} h6 `}>Days</h6>
                      </div>
                      <div className="col-4">
                        <h5 className={`${styles.h5} h5`}>3</h5>
                        <h6 className={`${styles.h6} h6 `}>Days</h6>
                      </div>
                    </div>
                  </div>
                </div>
              
                <div className="card-body">
                  <h2>Bianco Excursion</h2>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div> */}

            









          </div>
        </div>
      </div>
    </div>
  );
};

export default TreksCard;

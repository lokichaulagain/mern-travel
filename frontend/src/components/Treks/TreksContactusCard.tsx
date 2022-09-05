import styles from "../../styles/scss/Treks.module.scss";

const TreksContactusCard = () => {
  return (
    <div style={{ backgroundColor: "white" }} className="container-fluid">
      <div className="container py-5">
        <div className="container ">
          <div className="card container py-3 shadow-lg border-0 ">
            <div className="row">
              <div className="col col-12 col-md-9 col-sm-12">
                <div className="card-body">
                  <h3 className=" h3 mainColor fw-semibold">
                    Booking and contacts
                  </h3>
                  <p className=" paraColor text-muted ">
                    Would you like more info about other trips or you want to
                    book a special excursion?
                  </p>
                </div>
              </div>
              <div className="col col-12  col-md-3 col-sm-12  mt-sm-0 mb-3 ">
                <a href="#" className={`${styles.customButton} btn px-4 py-2`}>
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreksContactusCard;

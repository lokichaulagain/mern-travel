import styles from "../../styles/scss/Team.module.scss";

const TeamContactusCard = () => {
  return (
    <div className={`${styles.contactusWrapper} container my-5 px-5 `}>
      <div className="container px-5">
        <div className="row px-3">
          <div className="container px-3">
            <div
              className="card px-4  py-4"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div className="card-body">
                <h5 className="card-title">Booking and contacts</h5>
                <p className="card-text">
                  Would you like more info about other trips or you want to book
                  a special excursion?
                </p>
              </div>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamContactusCard;

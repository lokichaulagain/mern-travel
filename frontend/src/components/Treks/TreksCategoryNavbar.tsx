import styles from "../../styles/scss/Treks.module.scss";

const TreksCategoryNavbar = () => {
  return (
    <div className={`${styles.navWrapper}`}>
      <div className="container pb-3 px-5 pt-5">
        <div className="row pt-5  px-5">
          <div className="col-lg-6" style={{ display: "flex" }}>
            <ul className={`${styles.h5} h5`}>ALL</ul>
            <ul className={`${styles.h5} h5`}>HIKING</ul>
            <ul className={`${styles.h5} h5`}>TREKKING</ul>
            <ul className={`${styles.h5} h5`}>CANYONING</ul>
          </div>

          <div className="col-lg-6"></div>
        </div>
      </div>
    </div>
  );
};

export default TreksCategoryNavbar;

import style from "../styles/scss/TreksCategoryNav.module.scss";

const TreksCategoryNav = () => {
  return (
    <div className="container px-5 pt-5">
      <div className="container px-5 pt-5">
        <div className="row px-3">
          <div className="col-lg-6" style={{ display: "flex" }}>
            <ul className="h5">ALL</ul>
            <ul className="h5">HIKING</ul>
            <ul className="h5">TREKKING</ul>
            <ul className="h5">CANYONING</ul>
          </div>

          <div className="col-lg-6"></div>
        </div>
      </div>
    </div>
  );
};

export default TreksCategoryNav;

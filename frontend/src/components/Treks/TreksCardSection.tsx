import TrekCard from "./TrekCard";

const TreksCardSection = () => {
  return (
    <div style={{ backgroundColor: "#EFF3F6" }} className="container-fluid" >
      <div className="container py-5 ">
      <div className="container ">
        {/* navTab */}
        <ul
          className="nav nav-pills mx-2 mb-3 py-3 fw-bolder gap-3 "
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="btn shelterButton    shadow-lg active"
              id="pills-all-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-all"
              type="button"
              role="tab"
              aria-controls="pills-all"
              aria-selected="true"
            >
              ALL
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="btn shelterButton    shadow-lg"
              id="pills-hiking-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-hiking"
              type="button"
              role="tab"
              aria-controls="pills-hiking"
              aria-selected="false"
            >
              HIKING{" "}
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="btn shelterButton    shadow-lg"
              id="pills-treking-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-treking"
              type="button"
              role="tab"
              aria-controls="pills-treking"
              aria-selected="false"
            >
              TREKING
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="btn shelterButton    shadow-lg"
              id="pills-canyoning-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-canyoning"
              type="button"
              role="tab"
              aria-controls="pills-canyoning"
              aria-selected="false"
            >
              CANYONING
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="btn shelterButton    shadow-lg"
              id="pills-adventure-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-adventure"
              type="button"
              role="tab"
              aria-controls="pills-adventure"
              aria-selected="false"
            >
              ADVENTURE
            </button>
          </li>
        </ul>

        <div className="tab-content mx-2" id="pills-tabContent">
          <div
            className="tab-pane fade  show active "
            id="pills-all"
            role="tabpanel"
            aria-labelledby="pills-all-tab"
          >
            <div className="row">
              <div className="col-12 col-sm-12  col-md-6  col-lg-4 col-xl-4">
                <TrekCard />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <TrekCard />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <TrekCard />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <TrekCard />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <TrekCard />
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-hiking"
            role="tabpanel"
            aria-labelledby="pills-hiking-tab"
          >
            <div className="row">
              <div className="col-12 col-sm-12  col-md-6  col-lg-4 col-xl-4">
                <TrekCard />
              </div>
              <div className="col-12 col-sm-12  col-md-6  col-lg-4 col-xl-4">
                <TrekCard />
              </div>

              <div className="col-12 col-sm-12  col-md-6  col-lg-4 col-xl-4">
                <TrekCard />
              </div>

              <div className="col-12 col-sm-12  col-md-6  col-lg-4 col-xl-4">
                <TrekCard />
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="pills-treking"
            role="tabpanel"
            aria-labelledby="pills-treking-tab"
          >
            <div className="row">
              <div className="col-12 col-sm-12  col-md-6  col-lg-4 col-xl-4">
                <TrekCard />
              </div>

              <div className="col-12 col-sm-12  col-md-6  col-lg-4 col-xl-4">
                <TrekCard />
              </div>

              <div className="col-12 col-sm-12  col-md-6  col-lg-4 col-xl-4">
                <TrekCard />
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="pills-canyoning"
            role="tabpanel"
            aria-labelledby="pills-canyoning-tab"
          >
            <div className="row">
              <div className="col-12 col-sm-12  col-md-6  col-lg-4 col-xl-4">
                <TrekCard />
              </div>

              <div className="col-12 col-sm-12  col-md-6  col-lg-4 col-xl-4">
                <TrekCard />
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="pills-adventure"
            role="tabpanel"
            aria-labelledby="pills-adventure-tab"
          >
            <div className="row">
              <div className="col-12 col-sm-12  col-md-6  col-lg-4 col-xl-4">
                <TrekCard />
              </div>

              <div className="col-12 col-sm-12  col-md-6  col-lg-4 col-xl-4">
                <TrekCard />
              </div>

              <div className="col-12 col-sm-12  col-md-6  col-lg-4 col-xl-4">
                <TrekCard />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TreksCardSection;

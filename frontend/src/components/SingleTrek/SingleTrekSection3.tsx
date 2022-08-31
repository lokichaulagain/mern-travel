const SingleTrekSection3 = () => {
  return (
    <div>
      <div className="container p-5">
        <div className="container p-5">
          <div className="row p-2 gap-5">
            <div className="col">
              <h5 className=" fw-bold mainColor">High difficulty</h5>
              <p className="lh-lg paraColor">
                Only alpinist and experts can do this trek ercitation ullamco
                laboris nisi uta aliquipo amaletese.
              </p>

              <button
                type="button"
                className="btn fw-semibold fs-6 customButton  mt-4  shadow-sm  btn-primary rounded-pill py-3  px-5 btn-lg  "
              >
                Contact us
              </button>
            </div>
            <div className="col">
              <div className="row">
                <li className="liStyleRm mainColor col h6 fw-bold">
                  Participants
                </li>
                <li className="liStyleRm mainColor col h6 fw-bold">
                  {" "}
                  Start date
                </li>
                <li className="liStyleRm mainColor col h6 fw-bold">Duration</li>
              </div>
              <hr />

              <div className="row">
                <li className="liStyleRm col">8</li>
                <li className=" liStyleRm mainColor col"> 31 / 10 / 2020</li>
                <li className="liStyleRm mainColor col ">3 days</li>
              </div>
              <hr />

              <div className="row">
                <li className="liStyleRm  col">10</li>
                <li className=" liStyleRm mainColor col">05 / 11 / 2020 </li>
                <li className=" liStyleRm mainColor col">7 days</li>
              </div>
              <hr />

              <div className="row">
                <li className="liStyleRm col">15</li>
                <li className=" liStyleRm mainColor col">28 / 08 / 2020</li>
                <li className=" liStyleRm mainColor col">12 days</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTrekSection3;

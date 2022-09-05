const ShelterAvailabilityForm = () => {
  return (
    <div style={{ backgroundColor: "#eef2f6" }} className="container-fluid">
      <div className="container py-5">
        <div className="row container my-5  ">
          <div className=" row">
            <div className="mb-3 col col-md-12 col-sm-12 col-12 col-lg-3 col-xl-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label mainColor h6"
              >
                Name
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Full Name"
              />
            </div>

            <div className="mb-3 col col-md-6 col-sm-12 col-12 col-lg-2 col-xl-2">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label mainColor h6"
              >
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </div>

            <div className="mb-3 col col-md-6 col-sm-12 col-12 col-lg-2 col-xl-2">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label mainColor h6"
              >
                Checkin
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Checkin "
              />
            </div>

            <div className="mb-3 col col-md-6 col-sm-12 col-12 col-lg-2 col-xl-2">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label mainColor h6"
              >
                Checkout
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Checkout"
              />
            </div>

            <div className="mb-3 col col-md-6 col-sm-12 col-12 col-lg-2 col-xl-2">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label mainColor h6"
              >
                Guests
              </label>

              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option value="">select number</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col mb-3 col-md-3 col-lg-4 col-sm-12 col-12 col-xl-5 ">
              <a className="p-1 rounded link" href="#simple-list-item-1">
                Check availability
              </a>
            </div>

            <div className="col col-md-9 col-lg-7 col-sm-12 col-xl-6 7 ">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label paraColor text-muted"
                  htmlFor="flexCheckDefault"
                >
                  By click subscribe you accept the terms of service and the
                  privacy policy
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShelterAvailabilityForm;

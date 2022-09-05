import React from "react";
import styles from "../../styles/scss/Blog.module.scss";

// import imgC1 from "../../public/images/square-1.jpg";
// import Image from "next/image";

const SmallCardcompo = [
  {
    image: "https://templates.themekit.dev/alpins/media/square-1.jpg",
    data: "Febrary 25,2022",
    title: "Treaks and Path",
  },
  {
    image: "https://templates.themekit.dev/alpins/media/square-2.jpg",
    data: "may 13,2022",
    title: "Travles",
  },
  {
    image: "https://templates.themekit.dev/alpins/media/square-2.jpg",
    data: "April 2,2022",
    title: "people and kids",
  },
  {
    image: "https://templates.themekit.dev/alpins/media/square-4.jpg",
    data: "march 25,2022",
    title: "Animals and Nature",
  },
];

const SideTwo = () => {
  return (
    <>
      <div className="">
        <div className="row mb-3">
          <input
            className="form-control w-75"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-success w-25 " type="submit">
            Search
          </button>
        </div>

        <div className="mb-4">
          <ul className={`${styles.listItems} list-unstyled`}>
            <li className="list-item lead fw-bolder text-capitalize mb-3 mt-3">
              {" "}
              categories
            </li>
            <li className={`${styles.commonClass} list-item  mb-3`}>
              Treaks and Path
            </li>
            <li className={`${styles.commonClass} list-item  mb-3`}>Travles</li>
            <li className={`${styles.commonClass} list-item  mb-3`}>
              people and kids
            </li>
            <li className={`${styles.commonClass} list-item  mb-3`}>
              Animals and Nature
            </li>
          </ul>
        </div>

        <div className="mb-3">
          <ul className="list-unstyled">
            <li className="list-item lead fw-bolder text-capitalize mb-3 mt-3">
              Latest posts
            </li>

            {SmallCardcompo.map((mydata) => (
              <li
                className={`${styles.listItem} ${styles.commonClass} list-item  mb-2 `}
              >
                <div className={`${styles.mycard} card mb-2 border-0`}>
                  <div className="row g-0">
                    <div className="col-md-3">
                      <img
                        src={mydata.image}
                        className="card-img"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <p className="card-text">
                          <small className="text-muted">{mydata.data}</small>
                        </p>
                        <h5 className="card-title">{mydata.title}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="row mb-5">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {SmallCardcompo.map((mydata) => (
                <div className="carousel-item active">
                  <div className="card mb-3 border-0">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={mydata.image}
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <p className="card-text">
                            <small className="text-muted">{mydata.data}</small>
                          </p>
                          <h5 className="card-title">{mydata.title}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div> */}
            </div>
            <button
              className="carousel-control-prev dark"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon dark"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next dark"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon dark"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideTwo;

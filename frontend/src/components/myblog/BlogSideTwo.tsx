import React from "react";
import styles from "../../styles/scss/myBlog.module.scss";

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

const BlogSideTwo = () => {
  return (
    <div className="row row-cols-1 row-cols-md-1 row-cols-md-1">
      <div className="col col-sm-12">
        <div className="search d-flex">
          <input type="text" className="form-control" />
          <button className="btn btn-success" type="submit">
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
      </div>

      <div className="col col-sm-12">
        <div className="mb-3">
          <ul className="list-unstyled">
            <li className="list-item lead fw-bolder text-capitalize mb-3 mt-3">
              Latest posts
            </li>
            {/* for small card components */}

            {SmallCardcompo.map((mydata) => (
              <div className="card-group">
                <div className={`${styles.commonClass} card mb-3 `}>
                  <div className="row g-0">
                    <div className="col-4 col-md-2 col-lg-4">
                      <img
                        src={mydata.image}
                        className="card-img"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8 col-sm-8">
                      <div className="card-body">
                        <p className="card-text">{mydata.data}</p>
                        <h5 className="card-title">{mydata.title}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogSideTwo;

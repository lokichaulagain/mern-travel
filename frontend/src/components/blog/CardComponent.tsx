import React from "react";
import { RiAdminFill } from "react-icons/ri";
import { BsCalendar } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import styles from "../../styles/scss/Blog.module.scss";

const CardData = [
  {
    image:
      "https://images.unsplash.com/photo-1659535840049-980f16d85216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    date: "09",
    time: "Jan 2020",
  },
  {
    image:
      "https://images.unsplash.com/photo-1659535840049-980f16d85216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    date: "20",
    time: "April 2020",
  },
  {
    image:
      "https://images.unsplash.com/photo-1659535840049-980f16d85216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    date: "09",
    time: "march 2020",
  },
  {
    image:
      "https://images.unsplash.com/photo-1659535840049-980f16d85216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    date: "07",
    time: "Jan 2021",
  },
];

const CardComponent = () => {
  return (
    <>
      {CardData.map((mydata) => (
        <div
          className={`${styles.mainCardComp} card mb-4 shadow-lg  bg-body rounded`}
        >
          <div className="row row-cols-md-1 g-0">
            <div className={`${styles.myimgcontainer} col col-sm-8 col-md-4 myimgcontainer`}>
              <img
                src={mydata.image}
                className={`${styles.myimg} card-img rounded-start h-100`}
                alt="..."
              />

              <div className={`${styles.insideimg}`}>
                <div className="bg-primary row">
                  <h1>{mydata.date}</h1>
                </div>
                <div className="bg-dark row">{mydata.time}</div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Content Box</h5>
                <p
                  className="card-text"
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div>
                    <RiAdminFill />
                    admin{" "}
                  </div>
                  <div>
                    <BsCalendar />
                    01/03/2022
                  </div>
                  <div>
                    {" "}
                    <BsFillBookmarkFill />
                    Trek{" "}
                  </div>
                </p>
                <p className="card-text text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  eum iure esse quia obcaecati error fugiat consequuntur, quod
                  unde voluptates, perferendis qui eligendi{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardComponent;

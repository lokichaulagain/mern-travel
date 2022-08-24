import React from "react";
import Image from "next/image";
import img3 from "../../public/images/3.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmbulance } from "@fortawesome/free-solid-svg-icons";

const CardCarousel = () => {
  return (
    <div className="container " style={{ backgroundColor: "red" }}>
      <div
        id="carouselExampleCaptions"
        className="carousel slide mx-5"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-label="Slide 1"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className=""
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className=""
          ></button>
        </div>

        <div className="carousel-inner mx-5">
          <div className="carousel-item active">
            <div className="card" style={{ width: "18rem" }}>
              <Image src={img3} alt="" />
              <div className="card" style={{ width: "18rem" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis dignissimos, consectetur dicta iure in sunt mollitia
                quis.
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the content.
                </p>

                <a href="#" className="card-link">
                  <FontAwesomeIcon
                    icon={faAmbulance}
                    style={{ fontSize: 20, color: "orange" }}
                  />
                  Another link
                </a>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card" style={{ width: "18rem" }}>
              <Image src={img3} alt="" />
              <div className="card" style={{ width: "18rem" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis dignissimos, consectetur dicta iure in sunt mollitia
                quis.
              </div>
              <div className="card">
                <h5 className="card-title">Civetta Trekking</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                  eiusmod .
                </p>

                <a href="#" className="card-link">
                  <FontAwesomeIcon
                    icon={faAmbulance}
                    style={{ fontSize: 20, color: "orange" }}
                  />
                  Another link
                </a>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card" style={{ width: "20rem" }}>
              <Image src={img3} alt="" />

              <div className=" " style={{ width: "18rem" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis dignissimos, consectetur dicta iure in sunt mollitia
                quis.
                <span className=" ">test</span>
              </div>

              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the content.
                </p>

                <a href="#" className="card-link">
                  <FontAwesomeIcon
                    icon={faAmbulance}
                    style={{ fontSize: 20, color: "orange" }}
                  />
                  Another link
                </a>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card" style={{ width: "20rem" }}>
              <Image src={img3} alt="" />

              <div className=" " style={{ width: "18rem" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis dignissimos, consectetur dicta iure in sunt mollitia
                quis.
                <span className=" ">test</span>
              </div>

              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the content.
                </p>

                <a href="#" className="card-link">
                  <FontAwesomeIcon
                    icon={faAmbulance}
                    style={{ fontSize: 20, color: "orange" }}
                  />
                  Another link
                </a>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card" style={{ width: "20rem" }}>
              <Image src={img3} alt="" />

              <div className=" " style={{ width: "18rem" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis dignissimos, consectetur dicta iure in sunt mollitia
                quis.
                <span className=" ">test</span>
              </div>

              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the content.
                </p>

                <a href="#" className="card-link">
                  <FontAwesomeIcon
                    icon={faAmbulance}
                    style={{ fontSize: 20, color: "orange" }}
                  />
                  Another link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // /////////////////////////////////////////////////////////

    // <div className="container my-5" style={{backgroundColor:"red"}}>
    //   {/* <!-- Jumbotron --> */}
    //   <div className="card red py-2" id="intro">
    //     {/* <!-- Content --> */}
    //     <div className="card-body text-white">
    //       <h5 className="mb-4 font-weight-bold">
    //         This example is for an older version of Bootstrap (v.4). A newer
    //         version is available for Bootstrap 5.
    //       </h5>
    //       {/* <p className="mb-n2">
    //     Find detailed documentation and more examples here:<a target="_blank" href="https://mdbootstrap.com/docs/standard/components/carousel/" className="mb-3 mx-2 btn btn-sm btn-outline-white">Go to Docs v5
    //   </a>
    //   </p> */}
    //     </div>
    //     {/* <!-- Content --> */}
    //   </div>
    //   {/* <!-- Jumbotron -->  */}

    //   {/* <hr className="my-5"> */}

    //   {/* <!--Carousel Wrapper--> */}
    //   <div
    //     id="multi-item-example"
    //     className="carousel slide carousel-multi-item"
    //     data-ride="carousel"
    //   >
    //     {/* <!--Controls--> */}
    //     <div className="controls-top">
    //       <a
    //         className="btn-floating"
    //         href="#multi-item-example"
    //         data-slide="prev"
    //       >
    //         <i className="fa fa-chevron-left"></i>
    //       </a>
    //       <a
    //         className="btn-floating"
    //         href="#multi-item-example"
    //         data-slide="next"
    //       >
    //         <i className="fa fa-chevron-right"></i>
    //       </a>
    //     </div>
    //     {/* <!--/.Controls--> */}

    //     {/* <!--Indicators--> */}
    //     <ol className="carousel-indicators">
    //       <li
    //         data-target="#multi-item-example"
    //         data-slide-to="0"
    //         className="active"
    //       ></li>
    //       <li data-target="#multi-item-example" data-slide-to="1"></li>
    //       <li data-target="#multi-item-example" data-slide-to="2"></li>
    //     </ol>
    //     {/* <!--/.Indicators--> */}

    //     {/* <!--Slides--> */}
    //     <div className="carousel-inner" role="listbox">
    //       {/* <!--First slide--> */}
    //       <div className="carousel-item active">
    //         <div className="row">
    //           <div className="col-md-4">
    //             <div className="card mb-2">
    //             <Image src={img3} alt="" />
    //               <div className="card-body">
    //                 <h4 className="card-title">Card title</h4>
    //                 <p className="card-text">
    //                   Some quick example text to build on the card title and
    //                   make up the bulk of the content.
    //                 </p>
    //                 <a className="btn btn-primary">Button</a>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="col-md-4 clearfix d-none d-md-block">
    //             <div className="card mb-2">
    //             <Image src={img3} alt="" />
    //               <div className="card-body">
    //                 <h4 className="card-title">Card title</h4>
    //                 <p className="card-text">
    //                   Some quick example text to build on the card title and
    //                   make up the bulk of the content.
    //                 </p>
    //                 <a className="btn btn-primary">Button</a>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="col-md-4 clearfix d-none d-md-block">
    //             <div className="card mb-2">
    //             <Image src={img3} alt="" />
    //               <div className="card-body">
    //                 <h4 className="card-title">Card title</h4>
    //                 <p className="card-text">
    //                   Some quick example text to build on the card title and
    //                   make up the bulk of the content.
    //                 </p>
    //                 <a className="btn btn-primary">Button</a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       {/* <!--/.First slide--> */}

    //       {/* <!--Second slide--> */}
    //       <div className="carousel-item">
    //         <div className="row">
    //           <div className="col-md-4">
    //             <div className="card mb-2">
    //             <Image src={img3} alt="" />
    //               <div className="card-body">
    //                 <h4 className="card-title">Card title</h4>
    //                 <p className="card-text">
    //                   Some quick example text to build on the card title and
    //                   make up the bulk of the content.
    //                 </p>
    //                 <a className="btn btn-primary">Button</a>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="col-md-4 clearfix d-none d-md-block">
    //             <div className="card mb-2">
    //             <Image src={img3} alt="" />
    //               <div className="card-body">
    //                 <h4 className="card-title">Card title</h4>
    //                 <p className="card-text">
    //                   Some quick example text to build on the card title and
    //                   make up the bulk of the content.
    //                 </p>
    //                 <a className="btn btn-primary">Button</a>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="col-md-4 clearfix d-none d-md-block">
    //             <div className="card mb-2">
    //             <Image src={img3} alt="" />
    //               <div className="card-body">
    //                 <h4 className="card-title">Card title</h4>
    //                 <p className="card-text">
    //                   Some quick example text to build on the card title and
    //                   make up the bulk of the content.
    //                 </p>
    //                 <a className="btn btn-primary">Button</a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       {/* <!--/.Second slide--> */}

    //       {/* <!--Third slide--> */}
    //       <div className="carousel-item">
    //         <div className="row">
    //           <div className="col-md-4">
    //             <div className="card mb-2">
    //             <Image src={img3} alt="" />
    //               <div className="card-body">
    //                 <h4 className="card-title">Card title</h4>
    //                 <p className="card-text">
    //                   Some quick example text to build on the card title and
    //                   make up the bulk of the content.
    //                 </p>
    //                 <a className="btn btn-primary">Button</a>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="col-md-4 clearfix d-none d-md-block">
    //             <div className="card mb-2">
    //             <Image src={img3} alt="" />
    //               <div className="card-body">
    //                 <h4 className="card-title">Card title</h4>
    //                 <p className="card-text">
    //                   Some quick example text to build on the card title and
    //                   make up the bulk of the content.
    //                 </p>
    //                 <a className="btn btn-primary">Button</a>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="col-md-4 clearfix d-none d-md-block">
    //             <div className="card mb-2">
    //             <Image src={img3} alt="" />
    //               <div className="card-body">
    //                 <h4 className="card-title">Card title</h4>
    //                 <p className="card-text">
    //                   Some quick example text to build on the card title and
    //                   make up the bulk of the content.
    //                 </p>
    //                 <a className="btn btn-primary">Button</a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       {/* <!--/.Third slide--> */}
    //     </div>
    //     {/* <!--/.Slides--> */}
    //   </div>
    //   {/* <!--/.Carousel Wrapper--> */}
    // </div>
  );
};

export default CardCarousel;

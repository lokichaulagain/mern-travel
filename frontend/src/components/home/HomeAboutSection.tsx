import React from "react";
import Accordion from "./Accordion";

const HomeAboutSection = () => {
  return (
    <div
      style={{ backgroundColor: "#eff3f6" }}
      className="container-fluid">
      <div className="container py-5">
        <div className="row container py-5">
          <div className="row">
            <h1 className="h1 fw-bolder mainColor">ABOUT US</h1>
            <h6 className="h5 mainColor py-4">We live for the nature</h6>
          </div>
          <div className="row">
            <div className="col-12 pe-0 paraColor col-xl-4 col-lg-4 mb-5  col-md-12">
              The ancient Himalayas is one of the most preferred traveling agencies in Nepal. You can choose among the multiple packages we provide to spend your precious time that can be the best for your lifetime. Nepal is a country where the tourism industry is one of the biggest industries which means you’ll have plenty of travel during your visit. We provide the best packages, itineraries, and varieties of services to make you satisfied throughout the journey
            </div>

            <div className="col-12 pe-0 paraColor col-xl-4 col-lg-4 mb-5 col-md-12 ">
              <p className="paraColor ">
                With our various packages of trekking and traveling, you’ll be guided by a professional guide helping you explore the unexplored trails of beautiful destinations. We are especially focused on trekking, hiking, walking tours (especially in rural areas), mountain trips, and expeditions. Our team aims to provide the best adventure wherever you choose to take your trip. We are located in Kathmandu, Nepal. Besides Nepal, We also take tours to our neighboring countries India and
                Bhutan. Get to know our enthusiastic team and guides who are always ready for your service.{" "}
              </p>

              <br />
              <a
                className="link"
                href="">
                Read more
              </a>
            </div>

            <div className="col-12 pe-0 col-xl-4 col-lg-4 col-md-12">
              <Accordion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutSection;

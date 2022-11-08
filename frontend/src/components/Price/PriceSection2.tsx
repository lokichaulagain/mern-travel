import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PriceSection2 = () => {
  return (
    <div
      style={{ backgroundColor: "#eef3f7" }}
      className="container-fluid">
      <div className="container py-5">
        <div className="container row py-3">
          <div className="col-12 col-sm-12 col-md-12 col-l-6 col-xxl-6 mb-5 ">
            <h2 className="h2 mainColor  fw-bolder">BOOK YOUR TOUR</h2>
            <h6 className=" h5 pt-2  pb-2 mainColor">Contact us for tour booking</h6>

            <p className=" paraColor   pb-4 lh-lg">The ancient Himalayas is one of the most preferred traveling agencies in Nepal. You can choose among the multiple packages we provide to spend your precious time that can be the best for your lifetime. Nepal is a country where the tourism industry is one of the biggest industries which means you’ll have plenty of travel during your visit.</p>
            <button
              type="button"
              className="btn fw-semibold fs-6 customButton   shadow-sm  btn-primary rounded-pill py-3 px-5 btn-lg  ">
              Contact us
            </button>
          </div>

          <div className="col-12  col-md-12  col-sm-12  col-l-6 col-xxl-6">
            The Ancient Himalayas offer a remarkable journey to enjoy the majestic Himalayas with a diversified culture. Nepal, a country with thousands of destinations for trekking and hiking, is the best destination to enjoy your splendid time in nature. Your adventurous journey with Ancient Himalayas will certainly be an enthralling trip to Nepal taking the journey uphill and downhill along the greenery, peaks, glacier rivers, waterfalls, and the breathtaking view of the most beautiful
            mountains all over the world. Enjoy the adventure, amenities, and hospitality with the best trekking agency that provides you with the best packages to the Everest Base Camp, Annapurna Base Camp, Langtang Valley Trek, and multiple others.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection2;

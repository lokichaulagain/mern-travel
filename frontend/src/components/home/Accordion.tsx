import React from "react";

const Accordion = () => {
  return (
    <div
      className="accordion shadow-sm border-0 "
      id="accordionFlushExample">
      <div className="accordion-item  ">
        <h2
          className="accordion-header "
          id="flush-headingOne">
          <button
            className="accordion-button mainColor collapsed h6"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne">
            Our Treks and Trips
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            <p className="paraColor">
              We are always working smart to provide you with the best experience in your valuable time. We have planned the research Itinerary and all the services for your trip to give you the best. Besides, if you wish to bring changes to the itinerary and plan the trip as you wish, the changes can be made. We are always ready to cater to your needs throughout the trek to ease your difficulties. Your trip to Nepal must be the best trip filled with good memories, customer safety, and security,
              which will be all guided by our professionals. Our trips and all the activities are carried out taking into account that the environment is not ever affected.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item ">
        <h2
          className="accordion-header"
          id="flush-headingTwo">
          <button
            className="accordion-button mainColor collapsed h6"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo">
            Our team and Guides
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            <p className="paraColor">
              With Ancient Himalayas, you’ll have a team of experienced guides and climbers, provided with the necessary training and all the necessary equipment that you’ll need in your journey. You must be well aware that the trekking guide plays a vital role to determine how amazing your trip becomes. Our team and guides are very responsible and will give you the whole guarantee that you will have a smooth and fun trip till you depart from your desired destination. We have the best guides
              with long experience who are very professional in their field.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item ">
        <h2
          className="accordion-header"
          id="flush-headingThree">
          <button
            className="accordion-button mainColor collapsed h6"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree">
            Easy Plan and Payment Services
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            <p className="paraColor">We, the team of Ancient Himalayas, assure you that our services are spotless and the ways to deal with the problem that arises are quite smooth. We will always be thinking about your comfort. Besides an easy and proper plan, we also provide you with an easy payment procedure that will certainly be the perfect deal for you. Be part of an incredible journey and experience the easy plan and payment.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

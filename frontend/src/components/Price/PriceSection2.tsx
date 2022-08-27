import styles from "../../styles/scss/price/PriceSection2.module.scss";

const PriceSection2 = () => {
  return (
    <div className={`${styles.bg}  `}>
      <div className="container p-5">
        <div className="container p-5">
          <div className="row px-3">
            <div className="col">
              <h2 className="h2  customH2">BOOK YOUR TOUR</h2>
              <h6 className=" h6 pt-3 pb-4 customH6">
                Contact us for tour booking
              </h6>

              <p className="h6 customP  pb-4 lh-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
                est itaque ab. Molestias perspiciatis, iste nemo optio
                laudantium, reprehenderit at velit et officia nisi, sint
                corporis vel! Praesentium voluptas id aliquam optio odio
                consectetur reiciendis?
              </p>
              <button
                type="button"
                className="btn fw-semibold fs-6 customButton   shadow-sm  btn-primary rounded-pill py-3 px-5 btn-lg  "
              >
                Contact us
              </button>
            </div>

            <div className="col">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus tempora molestiae suscipit sed a, exercitationem
              adipisci laborum laudantium at! Aut sequi, necessitatibus tenetur
              ratione enim facilis illum, accusantium quos maiores dicta,
              dolorum molestiae maxime excepturi voluptatibus. Voluptate
              officiis, facere ad harum aperiam quasi perspiciatis esse vel
              impedit itaque architecto voluptatum omnis labore beatae iusto
              natus optio ex non aliquid ea fuga. Adipisci dolorum perspiciatis
              eaque vel voluptates laborum similique quasi iusto, quaerat
              temporibus fugit, explicabo sit! Distinctio debitis ea, nam illo
              corporis, nesciunt reiciendis fugiat modi harum excepturi mollitia
              quos in officia numquam nisi sunt dicta ut architecto amet
              tempora?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection2;

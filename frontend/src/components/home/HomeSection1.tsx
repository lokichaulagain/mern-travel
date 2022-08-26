import styles from "../../styles/scss/home/HomeSection1.module.scss";

const HomeSection1 = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <div className="container  p-5">
        <div className="container p-5">
          <div className="row px-3">
            <div className="col-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              cumque reprehenderit. Quod hic vero soluta, excepturi asperiores
              explicabo magni libero consequatur itaque saepe, perspiciatis
              eligendi nulla dignissimos aut mollitia animi, eius eveniet nisi
              cum enim facilis quibusdam. Eius dolore quam soluta tempora
              voluptatem corrupti ratione nam a ad. Quod voluptas similique
              omnis in voluptatum necessitatibus dolorum! Molestiae vero
              expedita ex dicta nisi quo facilis illum doloremque quidem,
              possimus mollitia dolorum fuga suscipit in ullam nostrum commodi.
              Suscipit ex laborum, eius ratione eveniet officiis praesentium
              dolore quaerat porro sed laboriosam ad quia quis natus facilis
              commodi obcaecati culpa omnis similique! Accusamus!
            </div>

            <div className="col-4">
              <span className="h2 sHeading ">LATEST TRIPS</span>
              <h6 className=" h6 py-4 sSubHeading">Explore the unexplored world</h6>
              <p className="py-3">
                Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                eiusmod tempor incididunt utlabore et dolore magna aliqua.
                Utenim ad minim veniam quiso.
              </p>

              <button
                type="button"
                className="btn btn-primary btn-lg rounded-pill px-4  sButton "
              >
                Join us now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection1;

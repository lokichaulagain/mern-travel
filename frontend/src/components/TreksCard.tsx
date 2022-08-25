import Image from "next/image";
import img1 from "../../public/images/1.jpeg";
import img2 from "../../public/images/2.jpeg";
import img3 from "../../public/images/3.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmbulance } from "@fortawesome/free-solid-svg-icons";

const TreksCard = () => {
  return (
    <div className="container px-5">
      <div className="container px-5">
        <div className="card-group px-5">
          <div className="col col-lg-4">
            <div className="card " style={{ width: "18rem" }}>
              <Image src={img1} alt="" />
              <div className="card-body">
                <h2>Bianco Excursion</h2>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>

          <div className="col col-lg-4">
            <div className="card " style={{ width: "18rem" }}>
              <Image src={img1} alt="" />
              <div className="card-body">
                <h2>Bianco Excursion</h2>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>

          <div className="col col-lg-4">
            <div className="card " style={{ width: "18rem" }}>
              <Image src={img1} alt="" />
              <div className="card-body">
                <h2>Bianco Excursion</h2>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>

          <div className="col col-lg-4">
            <div className="card " style={{ width: "18rem" }}>
              <Image src={img1} alt="" />
              <div className="card-body">
                <h2>Bianco Excursion</h2>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Booking and contacts card */}
        <div className="container px-5">
          <div
            className="card px-5 py-4"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Booking and contacts</h5>
              <p className="card-text">
                Would you like more info about other trips or you want to book a
                special excursion?
              </p>
            </div>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

        {/*  */}

        {/* Icon and text */}
        <div className="container px-5">
          <div className="row">
            <div
              className="col"
              style={{ display: "flex", alignItems: "center", gap: "20px" }}
            >
              <FontAwesomeIcon icon={faAmbulance} />
              <div className="col">
                <h4>Experienced team</h4>
                <p>We always lived inside our amazing nature</p>
              </div>
            </div>

            <div
              className="col"
              style={{ display: "flex", alignItems: "center", gap: "20px" }}
            >
              <FontAwesomeIcon icon={faAmbulance} />
              <div className="col">
                <h4>Experienced team</h4>
                <p>We always lived inside our amazing nature</p>
              </div>
            </div>

            <div
              className="col"
              style={{ display: "flex", alignItems: "center", gap: "20px" }}
            >
              <FontAwesomeIcon icon={faAmbulance} />
              <div className="col">
                <h4>Experienced team</h4>
                <p>We always lived inside our amazing nature</p>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default TreksCard;

import Image from "next/image";
import React from "react";
import img1 from "../../../public/images/1.jpeg";
import styles from "../../styles/scss/Team.module.scss";

const TeamMemberCard = () => {
  return (
    
    <div className={`${styles.wrapper} container px-5`} >
      <div className="container px-5">
        <div className="row px-3">
          {/*  */}
          <div className="col-6">
            <div className={`${styles.card} card my-2`} >
              <div className="row ">
                <div className="col-md-4">
                  <Image
                    src={img1}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Albert Travolta</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sitamet consectetur adipisicing elito
                      sed do eiusmod tempore.
                    </p>
                    <a className="p-1 rounded" href="#simple-list-item-1">
                      About me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="col-6">
            <div className={`${styles.card} card my-2`}>
              <div className="row ">
                <div className="col-md-4">
                  <Image
                    src={img1}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Albert Travolta</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sitamet consectetur adipisicing elito
                      sed do eiusmod tempore.
                    </p>
                    <a className="p-1 rounded" href="#simple-list-item-1">
                      About me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className={`${styles.card} card my-2`}>
              <div className="row ">
                <div className="col-md-4">
                  <Image
                    src={img1}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Albert Travolta</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sitamet consectetur adipisicing elito
                      sed do eiusmod tempore.
                    </p>
                    <a className="p-1 rounded" href="#simple-list-item-1">
                      About me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;

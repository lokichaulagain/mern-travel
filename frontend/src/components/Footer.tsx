import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmbulance } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "../styles/scss/Footer.module.scss";

const Footer = () => {
  return (
    <div className={`${styles.navSection} container-fluid`}>
      <div className="container">
        <div className="container p-5">
          <div className="row p-5">
            <div className={`${styles.navCol} col`}>
              <h5>Alpins</h5>
              <p className={styles.navPara}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Blanditiis mollitia, tenetur cumque dicta aperiam voluptatum
                repellat.
              </p>
            </div>
            <div className={`${styles.navCol} col`}>
              <h5>Contacts</h5>
              <span className={styles.navPara}>San Pellegrino, BG, Italy</span>
              <span>hello@example.com</span>
              <span>02 123 333 444</span>
            </div>
            <div className="col">
              <div className="row ">
                <div className={styles.iconRow}>
                  <Link href={"https://www.google.com"}>
                    <FontAwesomeIcon
                      className={styles.facebook}
                      icon={faAmbulance}
                    />
                  </Link>

                  <Link href={"https://www.google.com"}>
                    <FontAwesomeIcon
                      className={styles.twitter}
                      icon={faAmbulance}
                    />
                  </Link>

                  <Link href={"https://www.google.com"}>
                    <FontAwesomeIcon
                      className={styles.instagram}
                      icon={faAmbulance}
                    />
                  </Link>

                  <Link href={"https://www.google.com"}>
                    <FontAwesomeIcon
                      className={styles.google}
                      icon={faAmbulance}
                    />
                  </Link>
                </div>

                <p className={styles.navPara3}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Minima rerum fugiat voluptas quas, in at, assumenda, ad
                  dolorem natus exercitationem facilis eius.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="container px-5">
        <div className="container px-5">
          <div className="row px-3">
            <p className="col">
              © 2019 Alpins - Hiking & Outdoor Template Handmade by&nbsp;
              <a className={styles.link} href={"https://www.google.com"}>
                falcontech.com
              </a>
            </p>
            <p className={`${styles.nevSection} col text-end`}>
              <a className={styles.link} href={"https://www.google.com"}>
                <span className={styles.link}> Contact us</span>
              </a>
              <span className="px-2">|</span>

              <a className={styles.link} href={"https://www.facebook.com"}>
                Privacy policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

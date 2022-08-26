import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmbulance } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "../styles/scss/Footer.module.scss";


const Footer = () => {
  return (
    <div className={`${styles.navSection} container-fluid`}>
      <div className="container py-3">
        <div className="container py-3 px-5">
          <div className="row pt-5 px-5">
            <div className={`${styles.navCol} col`}>
              <h5 className="h5">Alpins</h5>
              <p className={` ${styles.para} h6 lh-lg pt-2`}>
                Somewhere between the bottom of the climb and the summit is the
                answer to the mystery why we climb.
              </p>
            </div>

            <div className={`${styles.navCol} col`}>
              <h5 className="h5">Contacts</h5>
              <span className={` ${styles.para} h6 pt-2 `}>
                San Pellegrino, BG, Italy
              </span>
              <span className={` ${styles.para} h6 pt-2 `}>
                hello@example.com
              </span>
              <span className={` ${styles.para} h6 pt-2 `}>02 123 333 444</span>
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

                <p className={` ${styles.para} h6 pt-4 lh-lg `}>
                  Subscribe to our newsletter of follow us on the social
                  channels to stay tuned.
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
            <p className={` ${styles.copy} col`}>
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

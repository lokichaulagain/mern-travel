import React from "react";
import Link from "next/link";
import styles from "../styles/scss/Footer.module.scss";
import { ImFacebook } from "react-icons/im";
import { BsTwitter, BsGoogle } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import Image from "next/image";
import logo from "../../public/ancient/ancientLogo.png";

const Footer = () => {
  return (
    <div className={`${styles.navSection} container-fluid`}>
      <div className="container py-3">
        <div className="container py-3">
          <div className="row pt-5">
            {/* Footer Logo ================================ */}
            <div
              className={`${styles.navCol} col-10  col-sm-10 col-md-10 col-lg-4`}
            >
              {/* <h5 className="h5">Alpins</h5> */}
              {/* <p className={` ${styles.para} h6 lh-lg pt-2`}>
                Somewhere between the bottom of the climb and the summit is the
                answer to the mystery why we climb.
              </p> */}
              <Image src={logo} className=" rounded" alt="" />{" "}
            </div>

            {/* Footer Contact ============================ */}
            <div
              className={`${styles.navCol} col-10 mt-5 col-sm-10 mt-sm-5 col-md-11 mt-md-5 col-lg-4 mt-lg-0`}
            >
              <h5 className="h5">Contacts</h5>
              <span className={` ${styles.para} h6 pt-2 `}>
                Basundhara, Kathmandu, Nepal
              </span>
              <span className={` ${styles.para} h6 pt-2 `}>
                ancienthimalayantreks@gmail.com
              </span>
              <span className={` ${styles.para} h6 pt-2 `}>
                +977 9851337204
              </span>
            </div>

            <div className="col-10 mt-5 col-md-10 col-sm-10 mt-sm-5 mt-md-5 col-lg-4 mt-lg-0 ">
              <div className="row ">
                <div className={`${styles.iconRow} gap-2`}>
                  <Link href={"/contact"}>
                    <div className={`${styles.facebook} py-1 px-2 `}>
                      <ImFacebook className={`${styles.navIcon} p-1`} />
                    </div>
                  </Link>

                  <Link href={"/contact"}>
                    <div className={`${styles.twitter} py-1 px-2 `}>
                      <BsTwitter className={`${styles.navIcon} p-1`} />
                    </div>
                  </Link>

                  <Link href={"/contact"}>
                    <div className={`${styles.instagram} py-1 px-2 `}>
                      <RiInstagramFill className={`${styles.navIcon} p-1`} />
                    </div>
                  </Link>

                  <Link href={"/contact"}>
                    <div className={`${styles.google} py-1 px-2 `}>
                      <BsGoogle className={`${styles.navIcon} p-1`} />
                    </div>
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

      <div className="container">
        <div className="row container ">
          <p className="col col-12 lh-base m col-xl-8 col-lg-8 col-md-12 col-sm-12">
            © 2019 Ancient Himalayan Treks - Hiking & Outdoor WebApp made by &nbsp;
            <a className="link" href={"https://falcontechnepal.com/"}>
              falcontech.com
            </a>
          </p>
          <p className="col ">
            <a className="link" href={"https://falcontechnepal.com/"}>
              <span> Contact us</span>
            </a>
            <span className="px-2">|</span>

            <a className="link" href={"https://falcontechnepal.com/"}>
              Privacy policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import Image from "next/image";
import Logo from "../../public/images/logo1.svg";
import styles from "../styles/scss/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark"
      style={{ height: "100px" }}
    >
      <div className="container">
        <Image src={Logo} alt="" width={220} height={100} />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                HOME
              </a>
            </li>

            <li className={`${styles.loki} nav-item dropdown   `}>
              <a
                className="nav-link"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PAGES
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    SPECIALS{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    OTHERS{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    CONTACTS{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BLOGS{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    TEAM{" "}
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                TREKS
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    PACKAGES
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    OFFERS{" "}
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                BLOGS
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTACTS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

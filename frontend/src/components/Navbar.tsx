import Image from "next/image";
import Logo from "../../public/images/logo1.svg";
import LogoBlack from "../../public/images/logoBlack.svg";
import styles from "../styles/scss/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className="container px-5">
      <div className="container px-5">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Image src={LogoBlack} alt="" width={220} height={100} />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <form className="d-flex" role="search">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      HOME
                    </a>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      PAGES
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          TEAM
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          SHELTERS
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          GALLERY
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          HISTORY
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          PRICES
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          FOODS
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          EVENTS
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          ABOUT
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      TREKS
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      CONTACTS
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      CONTACT
                    </a>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

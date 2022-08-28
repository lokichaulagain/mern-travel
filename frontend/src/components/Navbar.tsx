import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo1.svg";
import LogoBlack from "../../public/images/logoBlack.svg";
import styles from "../styles/scss/Navbar.module.scss";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="container px-5">
        <div className="container px-5">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <Image src={LogoBlack} alt="" width={220} height={80} />
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

              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                <form className="d-flex" role="search">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                    <li className="nav-item h6 fw-bold">
                      <Link href={"/"}>
                        <a className="nav-link  navLi" aria-current="page">
                          HOME
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item  dropdown">
                      <a
                        className="nav-link   h6 fw-bold navLi dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        PAGES
                      </a>
                      <ul className="dropdown-menu">
                        <Link href={"/team"}>
                          <li>
                            <a className="dropdown-item ">TEAM</a>
                          </li>
                        </Link>

                        <Link href={"/shelter"}>
                          <li className="pageLi">
                            <a className="dropdown-item ">SHELTERS</a>
                          </li>
                        </Link>

                        <Link href={"/history"}>
                          <li className="pageLi">
                            <a className="dropdown-item">HISTORY</a>
                          </li>
                        </Link>

                        <Link href={"/price"}>
                          <li className="pageLi">
                            <a className="dropdown-item">PRICES</a>
                          </li>
                        </Link>

                        <Link href={"/events"}>
                          <li className="pageLi">
                            <a className="dropdown-item">EVENTS</a>
                          </li>
                        </Link>

                        <li className="pageLi">
                          <a className="dropdown-item">GALLERY</a>
                        </li>

                        <li className="pageLi">
                          <a className="dropdown-item">FOODS</a>
                        </li>

                        <li className="pageLi">
                          <a className="dropdown-item  ">ABOUT</a>
                        </li>
                      </ul>
                    </li>

                    <Link href={"/trek"}>
                      <li className="nav-item pageLi">
                        <a
                          className="nav-link   h6 fw-bold  navLi"
                          aria-current="page"
                        >
                          TREKS
                        </a>
                      </li>
                    </Link>

                    <li className="nav-item">
                      <Link href={"/blog"}>
                        <a
                          className="nav-link h6 fw-bold  pageLi navLi"
                          aria-current="page"
                        >
                          BLOGS
                        </a>
                      </Link>
                    </li>

                    <Link href={"/contact"}>
                      <li className="nav-item pageLi">
                        <a
                          className="nav-link h6 fw-bold  navLi"
                          aria-current="page"
                        >
                          CONTACT
                        </a>
                      </li>
                    </Link>
                  </ul>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

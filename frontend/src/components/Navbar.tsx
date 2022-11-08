import Image from "next/image";
import Link from "next/link";
import LogoBlack from "../../public/images/logoBlack.svg";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "white", zIndex: "9" }}>
      <div className="container">
        <div className="container ">
          {/* Nav Left Side======================================== */}
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <Image src={LogoBlack} alt="" width={180} height={80} />

              <button
                className="navbar-toggler "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Nav Right Side====================================== */}
              <div
                className="collapse  navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                <form className="d-flex" role="search">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                    <Link href="/">
                      <button type="button" className="navColor h6 fw-bold ">
                        HOME
                      </button>
                    </Link>

                    <li className="nav-item dropdown  fw-bold">
                      <a
                        className="nav-link dropdown-toggle navColor h6 fw-bold custom_pointer"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        PAGES
                      </a>
                      <ul className="dropdown-menu">
                        <Link href="/team">
                          <li className="pageLi">
                            <a className="navLi dropdown-item  fw-bold ">
                              TEAM
                            </a>
                          </li>
                        </Link>

                        <Link href="/shelter">
                          <li className="pageLi">
                            <a className="dropdown-item fw-bold navLi">
                              SHELTERS
                            </a>
                          </li>
                        </Link>

                        <Link href="/history">
                          <li className="pageLi">
                            <a className="dropdown-item fw-bold navLi">
                              HISTORY
                            </a>
                          </li>
                        </Link>

                        <Link href="/price">
                          <li className="pageLi">
                            <a className="dropdown-item fw-bold navLi">
                              PRICES
                            </a>
                          </li>
                        </Link>

                        <Link href="/events">
                          <li className="pageLi">
                            <a className="dropdown-item fw-bold navLi">
                              EVENTS
                            </a>
                          </li>
                        </Link>

                        <li className="pageLi">
                          <a className="dropdown-item fw-bold navLi">GALLERY</a>
                        </li>

                        <li className="pageLi">
                          <a className="dropdown-item fw-bold navLi">FOODS</a>
                        </li>

                        <li className="pageLi">
                          <a className="dropdown-item fw-bold navLi">ABOUT</a>
                        </li>
                      </ul>
                    </li>

                    <Link href="/trek">
                      <button type="button" className="navColor h6 fw-bold ">
                        TREKS
                      </button>
                    </Link>

                    <Link href="/blog">
                      <button type="button" className="navColor h6 fw-bold ">
                        BLOGS
                      </button>
                    </Link>

                    <Link href="/contact">
                      <button type="button" className="navColor h6 fw-bold ">
                        CONTACT
                      </button>
                    </Link>
                  </ul>
                </form>
              </div>
              {/* ===================================== */}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

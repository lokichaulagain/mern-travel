import Image from "next/image";
import Link from "next/link";
import LogoBlack from "../../public/images/logoBlack.svg";


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
              ></button>

              <div
                className="collapse navbar-collapse"
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
                        className="nav-link dropdown-toggle fw-bold"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        PAGES
                      </a>
                      <ul className="dropdown-menu">
                        <Link href="/team">
                          <li className="pageLi">
                            <a className="dropdown-item">TEAM</a>
                          </li>
                        </Link>

                        <Link href="/shelter">
                          <li className="pageLi">
                            <a className="dropdown-item">SHELTERS</a>
                          </li>
                        </Link>

                        <Link href="/history">
                          <li className="pageLi">
                            <a className="dropdown-item">HISTORY</a>
                          </li>
                        </Link>

                        <Link href="/price">
                          <li className="pageLi">
                            <a className="dropdown-item">PRICES</a>
                          </li>
                        </Link>

                        <Link href="/events">
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
                          <a className="dropdown-item">ABOUT</a>
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
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

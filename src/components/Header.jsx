import { useState } from "react"

// eslint-disable-next-line react/prop-types
const Header = ({ activeLink, headerScrolled }) => {
  const [mobileMenuCross, setMobileMenuCross] = useState(false)
  const handleMobileMenu = () => {
    if (mobileMenuCross) {
      setMobileMenuCross(false)
    } else {
      return
    }
  }
  return (
    <header
      id="header"
      className={`fixed-top ${headerScrolled && "header-scrolled"}`}
    >
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <a href="index.html">Elevator</a>
        </h1>
        {/* <a href="index.html" className="logo me-auto">
      <img src="../src/assets/img/logo.png" alt="" className="img-fluid" />
    </a> */}

        <nav
          id="navbar"
          className={`navbar ${mobileMenuCross && "navbar-mobile"}`}
        >
          <ul>
            <li>
              <a
                className={`${
                  activeLink === "#home"
                    ? "nav-link scrollTo active"
                    : "nav-link scrollTo"
                }`}
                href="#home"
                onClick={handleMobileMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={`${
                  activeLink === "#about"
                    ? "nav-link scrollTo active"
                    : "nav-link scrollTo"
                }`}
                href="#about"
                onClick={handleMobileMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                className={` ${
                  activeLink === "#services"
                    ? "nav-link scrollTo active"
                    : "nav-link scrollTo"
                }`}
                href="#services"
                onClick={handleMobileMenu}
              >
                Services
              </a>
            </li>
            <li>
              <a
                className={` ${
                  activeLink === "#portfolio"
                    ? "nav-link scrollTo active"
                    : "nav-link scrollTo"
                }`}
                href="#portfolio"
                onClick={handleMobileMenu}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                className={` ${
                  activeLink === "#team"
                    ? "nav-link scrollTo active"
                    : "nav-link scrollTo"
                }`}
                href="#team"
                onClick={handleMobileMenu}
              >
                Team
              </a>
            </li>
            {/* <li className="dropdown">
              <a href="#">
                <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>{" "}
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
              </ul>
            </li> */}
            <li>
              <a
                className={` ${
                  activeLink === "#contact"
                    ? "nav-link scrollTo active"
                    : "nav-link scrollTo"
                }`}
                href="#contact"
                onClick={handleMobileMenu}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className={`${
                  activeLink === "#about"
                    ? "getStarted scrollTo active"
                    : "getStarted scrollTo"
                }`}
                href="#about"
                onClick={handleMobileMenu}
              >
                Get Started
              </a>
            </li>
          </ul>
          {/* <i className="bi bi-list mobile-nav-toggle"></i> */}
          <div onClick={() => setMobileMenuCross(!mobileMenuCross)}>
            {mobileMenuCross ? (
              <i className="bi bi-x mobile-nav-toggle"></i>
            ) : (
              <i className="bi bi-list mobile-nav-toggle"></i>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header

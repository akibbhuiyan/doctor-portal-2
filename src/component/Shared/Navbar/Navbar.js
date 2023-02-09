import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import { RiLogoutBoxLine } from "react-icons/ri";
const Navbar = (props) => {
  const homeNav = props.used;
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className={homeNav}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <h3 className="logo"> Doctor Portal</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link me-5 mr-5 active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/appointment" className="nav-link me-5 mr-5">
                  Appointment
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/doctor/dashboard" className="nav-link me-5 mr-5">
                  Dashboard
                </Link>
              </li>

              <li className="nav-item">
                <a href="#blogs" className="nav-link me-5 mr-5 homeNavBlack">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link me-5 mr-5 homeNavBlack">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                {user ? (
                  <Link to="# " className="login-btn me-0 " onClick={logOut}>
                    <RiLogoutBoxLine />
                    {user.displayName}
                  </Link>
                ) : (
                  <Link to="/login " className=" px-5 login-btn me-3 ">
                    LogIn
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

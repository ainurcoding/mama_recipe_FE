import React, { Fragment } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import gStyle from "../../assets/css/general.module.css";
import footStyle from "../../assets/css/footer.module.css";
import iconMamaRecipe from "../../assets/img/logo food recipe.png";
// react-redux


const Navbar = () => {
  // inline style
  // inline style

  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    return navigate("/");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "none" }}
      >
        <div className="container-fluid">
          <Link to="/landing" className="navbar-brand p-3" href="#">
            <img
              src={iconMamaRecipe}
              alt=""
              style={{
                backgroundColor: "#efc81a",
                width: "50px",
                height: "50px",
              }}
            />
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/landing"
                  className={`nav-link active text-decoration-none ${gStyle["airbnb-bd"]} ${gStyle["txt-color-blue"]}`}
                  style={({ isActive }) =>
                    isActive ? { borderBottom: "3px solid black" } : {}
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link active text-decoration-none ${gStyle["txt-color-blue"]}`}
                  to="/add_recipe"
                  style={({ isActive }) =>
                    isActive ? { borderBottom: "3px solid black" } : {}
                  }
                >
                  Add Recipe
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link active text-decoration-none ${gStyle["txt-color-blue"]}`}
                  to="/profile"
                  style={({ isActive }) =>
                    isActive ? { borderBottom: "3px solid black" } : {}
                  }
                >
                  Profile
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <div className="button-wrap">
                <button
                  className="btn"
                  onClick={() => {
                    const confirmBox = window.confirm(
                      "You left us too soon :( ?"
                    );

                    if (confirmBox === true) {
                      onLogout();
                    }
                  }}
                  style={{ background: "#efc81a" }}> Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const SpaceEmpty = () => {
  const styleEmpty = {
    height: "100px",
  };
  return (
    <Fragment>
      <div className={` w-100`} style={styleEmpty}></div>
    </Fragment>
  );
};

const Footer = () => {
  return (
    <Fragment>
      <div
        className={`w-100 ${gStyle["bg-color-yellow-nh"]} ${footStyle["footer"]} position-absolute d-flex flex-column align-items-center justify-content-center`}
      >
        <div
          className={`w-100 h-100 d-flex flex-column justify-content-center align-items-center gap-5`}
        >
          <div>
            <p className={`display-1 ${gStyle["airbnb-md"]} text-dark`}>
              Eat, Cook, Repeat
            </p>
          </div>
          <div className="mb-5">
            <p className={`${gStyle["airbnb-lt"]} h6`}>
              Share Your Best Recipe By Uploading Here!
            </p>
          </div>
          <div>
            <ul className={`d-flex flex-row gap-3 list-unstyled`}>
              <li>Product</li>
              <li>Company</li>
              <li>Learn More</li>
              <li>Get In Touch</li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export { Navbar, Footer, SpaceEmpty };

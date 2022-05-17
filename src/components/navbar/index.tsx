import React from "react";
import Brand from "../brand";
import RoundedImage from "../roundedImage";
import "./index.scss";

export default function navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  background--dark">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">
            Navbar
          </a> */}
          <Brand></Brand>

          <button
            className="navbar-toggler navbar-dark "
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
                <a className="nav-link active" aria-current="page" href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  All Preojects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Members
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Stats
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Help
                </a>
              </li>
            </ul>
            <div className="d-flex " role="search">
              <div className="user--info">
                <div className="user--name">Diane Ward</div>
                <div className="user--role">Product Manger</div>
              </div>
              <RoundedImage />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

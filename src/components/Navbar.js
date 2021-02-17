import React from "react"
import Header from "./Header"
import "./styles.css"

const Navbar = ({ className }) => {
  return (
    <>
      <Header />
      <nav className="navbar navbar-inverse navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            invi
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ol className="navbar-nav me-auto mb-2 mb-lg-0" type="roman">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  Services
                </a>
              </li>
            </ol>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

import React from "react"
import Header from "./header"
import img from "../images/invi-logo.png"
import "./main.css"
import { Link } from "gatsby"
const Navbar = ({ className }) => {
  return (
    <>
      <Header />
      <a className="navbar-brand logo text-center w-100" href="/">
        <img src={img} alt="Invi Logo" width="150" />
      </a>
      <nav className="navbar navbar-expand-lg navbar-light container-fluid py-3">
        <a className="navbar-brand d-lg-none" href="/">
          <img src={img} alt="Invi Logo" width="150" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item ">
              <Link
                to="/"
                activeClassName="active"
                className="nav-link"
                refresh="true"
              >
                HOME<span className="sr-only ">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link"
                activeClassName="active"
                activeStyle={{ color: "#eb483f" }}
                partiallyActive={true}
              >
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-link"
                activeClassName="active"
                activeStyle={{ color: "#eb483f" }}
                partiallyActive={true}
              >
                SERVICES
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/stories/"
                className="nav-link"
                activeClassName="active"
                activeStyle={{ color: "#eb483f" }}
                partiallyActive={true}
              >
                STORIES
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/works/"
                className="nav-link"
                activeClassName="active"
                activeStyle={{ color: "#eb483f" }}
                partiallyActive={true}
              >
                WORKS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/say-hello"
                className="nav-link say-hello"
                activeClassName="active"
                activeStyle={{ color: "#eb483f" }}
                partiallyActive={true}
              >
                SAY HELLO
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar

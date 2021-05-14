import React from "react"
import Header from "./header"
import img from "../images/invi-logo.png"
import "./main.css"

import { Link } from "gatsby"
const Navbar = ({ className }) => {
  return (
    <>
      <Header />
      <div id="logo1">invi</div>
      <div id="container">
        <div id="logo">invi</div>

        <nav id="top_nav">
          <input id="nav-toggle" type="checkbox" />
          <ul class="links">
            <li>
              <Link
                to="https://invi.us/"
                activeClassName="active"
                className="nav-link"
                refresh="true"
              >
                HOME<span className="sr-only ">(current)</span>
              </Link>
            </li>
            <li>
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
            <li>
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
            <li>
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
            <li>
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
            <li>
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
          <label for="nav-toggle" class="icon-burger">
            <div class="line"></div>
            <div class="line"></div>
          </label>
        </nav>
      </div>
    </>
  )
}

export default Navbar

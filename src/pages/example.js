import React from "react"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../components/main.css"
import "../components/index.css"
import contact from "../images/contact.gif"

const sayhello = () => {
  return (
    <>
      {" "}
      <Header />
      <div className="d-flex flex-wrap">
        <div class="col-12">
          <p>
            <i class="fa fa-arrow-left" aria-hidden="true"></i>Back
          </p>
        </div>
      </div>
    </>
  )
}

export default sayhello

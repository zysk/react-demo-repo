import React from "react"
import "../components/main.css"
import SEO from "../components/seo"
import img from "../images/invi-logo.png"
const NotFoundPage = () => (
  <div className="home">
    <SEO title="404: Not found" />
    <a className="navbar-brand logo text-center w-100" href="#">
      <img src={img} alt="Invi Logo" width="150" />
    </a>
    <div className="container h-100">
      <div className="row py-5 d-flex align-items-center justify-content-center text-center">
        <div className="col-6">
          <h1 className="title">404: Not Found</h1>
          <p className="description py-3">
            You just hit a route that doesn&#39;t exist... the sadness.
          </p>
          <a
            href="/"
            className="btn virtual text-uppercase mt-5 pt-5 font-weight-bold"
          >
            Go Back to Home Page
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default NotFoundPage

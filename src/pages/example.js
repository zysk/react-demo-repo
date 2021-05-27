import React, { Component } from "react"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"
import TopMenu from "../components/Menu"
import "../components/main.css"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import SEO from "../components/seo"
import { FaArrowRight } from "react-icons/fa"
import { FaChevronDown } from "react-icons/fa"
var __html = require("../../static/aframe1.html.js")
var template = { __html: __html }

const ScreenShare = ({ data }) => {
  return (
    <div className="home">
      <SEO title="Home" />
      <div className="position-absolute w-100">
        <TopMenu />
      </div>

      <div className="screen-share ">
        <span dangerouslySetInnerHTML={template} />
      </div>
      <div className="text-center position-relative w-100">
        {" "}
        <a href="#next-section" className="text-center">
          <FaChevronDown className="scroll-down-icon" />
        </a>{" "}
      </div>

      <section className="container py-5 " id="next-section">
        <h1 className="text-center title">{data.home.title}</h1>
        <div className="row justify-content-between align-items-center py-5">
          <div className="col-md-6 text-center text-md-left">
            <p className="description text-justify ">
              {data.home.description.description}
            </p>
            <a
              href="/works/"
              className=" text-left virtual mt-4 font-weight-bold pl-0"
            >
              CREATE NOW
            </a>
          </div>

          <div className="col-md-5 pt-5 pt-md-0">
            <Image
              fluid={data.home.image1.fluid}
              alt="aframe"
              className=" img-fluid"
            />
          </div>
        </div>
      </section>
      {/* <!-- ======= Create Your Virtual World ======= --> */}

      {/* <!-- ======= Services Section ======= --> */}

      <section className="container pb-4 pt-1">
        <h1 className="title text-center">{data.home.services}</h1>
        <div className="row py-3 ">
          <div className="col-md-6 text-center">
            <div className="icon-box mt-5 mt-lg-0 ">
              <img
                src={data.home.animation.file.url}
                alt="Animation"
                className="img-fluid"
              />
              <h2 className="py-3 font-weight-light">
                {data.home.animation.title}
              </h2>
              <a href="./services/" className="font-weight-bold">
                Explore
                <FaArrowRight className="pl-1 ml-1" />
                {/* <i
                  className="fa fa-arrow-right pl-1 ml-2"
                  aria-hidden="true"
                ></i> */}
              </a>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <div className="icon-box mt-4 mt-lg-0 ">
              <img
                src={data.home.virtual.file.url}
                alt="Animation"
                className="img-fluid"
              />
              <h2 className="pt-md-5 py-3 pb-md-3 py-lg-3 font-weight-light">
                {data.home.virtual.title}
              </h2>
              <a href="./services/" className="font-weight-bold">
                Explore <FaArrowRight className="pl-1 ml-1" />
                {/* <i
                  className="fa fa-arrow-right pl-1 ml-2"
                  aria-hidden="true"
                ></i> */}
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======= Services Section ======= --> */}
      <Footer data1={data} />
    </div>
  )
}

export const query = graphql`
  {
    contact: contentfulContactFooter {
      email
      copyright
      phoneLink
      phone
      mailToLink
      location
    }
    image: file(relativePath: { eq: "aframe-illustration.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    intro: file(relativePath: { eq: "invi-cloud-design.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    home: contentfulHomePage {
      title
      homeImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      image1 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      description {
        description
      }
      services
      animation {
        fluid {
          ...GatsbyContentfulFluid
        }
        title
        file {
          url
        }
      }
      virtual {
        fluid {
          ...GatsbyContentfulFluid
          src
        }
        file {
          url
        }
        title
      }
    }
  }
`

export default ScreenShare

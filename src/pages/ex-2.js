import React from "react"
import "../components/style.css"

import { withPrefix, Link } from "gatsby"
import TopMenu from "../components/Menu"
import "../components/main.css"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import SEO from "../components/seo"
// var __html = require("../../static/aframe.html.js")
// var template = { __html: __html }
const ex = ({ data }) => {
  return (
    <div>
      <div id="container">
        <div id="logo">invi</div>
        <nav id="top_nav">
          <input id="nav-toggle" type="checkbox" />
          <ul class="links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
          <label for="nav-toggle" class="icon-burger">
            <div class="line"></div>
            <div class="line"></div>
          </label>
        </nav>
      </div>
      <div id="hero_text">
        <p id="headline">We are designers of virtual experiences</p>
        <p id="enter_btn">Enter our virtual home</p>
        <p id="home_text">
          Welcome to our home. Our home reflects who we are as people. We have
          curated a range of our work for you to explore.
        </p>
      </div>
      <div id="instructions">
        <p id="click_drag">use arrow keys to move | click + drag to rotate</p>
      </div>
      <a-scene
        embedded
        class="aframe-height"
        renderer="colorManagement: true; highRefreshRate: true"
        vr-mode-ui="enabled: false"
        background="color: #ced4da"
        raycaster="objects: .collidable"
        cursor="rayOrigin:mouse; fuse:false"
      >
        <a-sky
          id="sky"
          visible="false"
          radius="200"
          theta-length="180"
          material="shader: gradientshader; topColor: #5582ec; bottomColor: #f2c4c4"
        ></a-sky>
        <a-entity id="orb" orb position="0 0 0"></a-entity>
        <a-entity id="lighting" lighting position="0 0 0"></a-entity>
        <a-entity id="stars_1" stars position="0 0 0"></a-entity>

        <a-entity id="cameraRig" hero lighting>
          <a-entity
            id="head"
            camera
            position="0 1 0"
            wasd-controls="acceleration: 3"
          ></a-entity>
        </a-entity>
      </a-scene>

      <section className="container py-5 ">
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
              <h2 className="py-3">{data.home.animation.title}</h2>
              <a href="./services/" className="font-weight-bold">
                Explore{" "}
                <i
                  className="fa fa-arrow-right pl-1 ml-2"
                  aria-hidden="true"
                ></i>
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
              <h2 className="pt-md-5 py-3 pb-md-3 py-lg-3">
                {data.home.virtual.title}
              </h2>
              <a href="./services/" className="font-weight-bold">
                Explore{" "}
                <i
                  className="fa fa-arrow-right pl-1 ml-2"
                  aria-hidden="true"
                ></i>
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

export default ex

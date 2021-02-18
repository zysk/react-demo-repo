import React from "react"
import Navbar from "../components/Navbar"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../components/styles.css"
import Contact from "../components/Contact"
import Subscribe from "../components/Subscribe"
import Footer from "../components/HomeFooter"
import Services from "../components/HomeServices"

const index = ({ data }) => {
  return (
    <div className="home position-relative">
      {/* <Header />
    <SEO title="Home" /> */}

      <div className="pb-5 ">
        <a-scene embedded className="a-frame-1" vr-mode-ui="enabled: false">
          <a-entity
            position="0 2.25 -15"
            particle-system="color: #EF0000,#44CC00"
          ></a-entity>
          <a-entity
            position="0 2.25 -15"
            particle-system="preset: dust"
          ></a-entity>
          <a-entity
            position="0 2.25 -15"
            particle-system="preset: snow"
          ></a-entity>
          <a-entity
            position="0 2.25 -15"
            particle-system="preset: rain"
          ></a-entity>
          <a-entity
            position="0 2.25 -15"
            particle-system="preset: dust; texture: ./images/star2.png; color: #0000FF,#00FF00,#FF0000"
          ></a-entity>
          <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
          <a-sphere
            position="0 1.25 -5"
            radius="1.25"
            color="#EF2D5E"
          ></a-sphere>
          <a-cylinder
            position="1 0.75 -3"
            radius="0.5"
            height="1.5"
            color="#FFC65D"
          ></a-cylinder>
          <a-plane
            position="0 0 -4"
            rotation="-90 0 0"
            width="4"
            height="4"
            color="#7BC8A4"
          ></a-plane>
          <a-plane
            rotation="-90 0 0"
            width="4"
            height="4"
            color="#7BC8A4"
          ></a-plane>
          <a-sky color="gray"></a-sky>
        </a-scene>
      </div>

      <div className=" content container-fluid">
        <Navbar />
      </div>
      {/* <Services /> */}
      <section className="Services">
        <div className="container">
          <h3 className="home-heading">Services</h3>
          <hr className="hr-line border-danger mt-2"></hr>
          <div className="row">
            <div className="col-md-6 text-center py-5 my-5  d-flex flex-column align-items-center">
              <h4 className="home-subheading text-uppercase">Animation</h4>
              <button className="btn btn-lg btn-outline-danger mt-3 ">
                EXPLORE
              </button>
            </div>
            <div className="col-md-6  d-flex flex-column align-items-center">
              <Image
                fixed={data.animation.childImageSharp.fixed}
                className="services-img"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 d-flex flex-column align-items-center">
              <Image
                fixed={data.virtual.childImageSharp.fixed}
                className="services-img"
              />
            </div>
            <div className="col-md-6 text-center py-5 my-5 d-flex flex-column align-items-center">
              <h4 className="home-subheading text-uppercase ">
                Virtual Environment
              </h4>
              <button className="btn btn-lg btn-outline-danger mt-3 ">
                EXPLORE
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="virtualWorld my-5">
        <div className="container">
          <div className="row virtual-row">
            <div className="col-md-4 p-2 ">
              <h3 className="home-heading mb-5">Create Your Virtual Space</h3>
              <hr className="hr-line border-danger mt-2"></hr>
              <button className="btn btn-lg btn-outline-danger mt-3 ">
                Go To Virtual World
              </button>
            </div>
            <div className="col-md-3 vcol-1 mx-5">
              <Image
                fluid={data.image.childImageSharp.fluid}
                className="virtualWorld-img"
              />
              <p className="pt-5 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
                accusantium. Laudantium provident maxime eius optio fugit saepe
                ipsa. Id, recusandae.
              </p>
            </div>
            <div className="col-md-3 vcol-1">
              <p className="pb-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
                accusantium. Laudantium provident maxime eius optio fugit saepe
                ipsa. Id, recusandae.
              </p>
              <Image
                fluid={data.image.childImageSharp.fluid}
                className="virtualWorld-img"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      {/* <section className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              {" "}
              <Contact />
            </div>
            <div className="col-md-6">
              <Subscribe />
            </div>
          </div>
        </div>
      </section> */}
      {/* <Subscribe />
      <Contact /> */}
    </div>
  )
}
export const query = graphql`
  {
    image: file(relativePath: { eq: "img-1.jpeg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    animation: file(relativePath: { eq: "animations-icon.png" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    virtual: file(relativePath: { eq: "virtual-icon.png" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`
export default index

import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../components/main.css"

import animation from "../images/animation-illustration.gif"
import virtual from "../images/invi-virtual.gif"

const index = ({ data }) => {
  return (
    <div className="home">
      <Navbar className="Home" />
      {/* Aframe Section */}

      <section className="container text-center py-4">
        <Image
          fixed={data.image.childImageSharp.fixed}
          alt="aframe"
          className="img-fluid"
        />
      </section>
      {/* Aframe Section */}

      {/* <!-- ======= Create Your Virtual World ======= --> */}

      <section className="container py-5">
        <h1 className="text-center title">CREATE YOUR VIRTUAL WORLD</h1>
        <div className="row justify-content-between align-items-center py-5">
          <div className="col-md-6 ">
            <p className="description text-justify ">
              We work with Clients who are passionate about their work, want to
              tell a story or share a message. Our products are a creative and
              customized solution to engage your audience. We are currently
              looking for new clients. We are designers of virtual experiences.
              At the center of our design process is YOU.
            </p>
            <a href="#" className="btn text-left virtual mt-4 font-weight-bold">
              CREATE NOW
            </a>
            {/* <button className="text-left virtual mt-4">CREATE NOW</button> */}
          </div>

          <div className="col-md-5 pt-5 pt-md-0">
            <Image
              fluid={data.intro.childImageSharp.fluid}
              alt="aframe"
              className="img-fluid"
            />
          </div>
        </div>
      </section>
      {/* <!-- ======= Create Your Virtual World ======= --> */}

      {/* <!-- ======= Services Section ======= --> */}

      <section className="container pb-4 pt-1">
        <h1 className="title text-center">SERVICES</h1>
        <div className="row py-3 ">
          <div className="col-md-6 text-center">
            <div className="icon-box mt-5 mt-lg-0 ">
              <img src={animation} alt="Animation" className="img-fluid" />
              <h2 className="py-3">Animation</h2>
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
              <img src={virtual} alt="Animation" className="img-fluid" />
              <h2 className="pt-md-5 pb-md-3 py-lg-3">Virtual</h2>
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
      <Footer />
    </div>
  )
}
export const query = graphql`
  {
    image: file(relativePath: { eq: "aframe-illustration.png" }) {
      childImageSharp {
        fixed(width: 600, height: 600) {
          ...GatsbyImageSharpFixed_tracedSVG
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
  }
`
export default index

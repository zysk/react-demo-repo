import React from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import "../../components/main.css"

const index = ({ data }) => {
  return (
    <div className="works">
      <Navbar />
      <section className="circle-section pt-5" id="portfolio">
        <h2 className="title text-center">OUR WORKS</h2>
        <div className="container py-5">
          <div className="content-section-heading text-center">
            <h3 className="my-5 title"></h3>
          </div>
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-lg-4 col-md-6 pb-5 mb-3 px-4">
              <a className="circle-item" href="./archvilla">
                <div className="caption">
                  <div className="caption-content mt-auto mx-auto mb-5">
                    <div className="caption-heading h2 font-weight-bold text-center d-flex justify-content-center">
                      ARCHVILLA
                    </div>
                  </div>
                </div>
                <Image
                  fluid={data.archvilla.childImageSharp.fluid}
                  alt="Drawing Gallery"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-lg-4 col-md-6 pb-5 mb-3 px-4">
              <a className="circle-item" href="./granada-theatre/">
                <div className="caption">
                  <div className="caption-content mt-auto mx-auto mb-5">
                    <div className="caption-heading h2 font-weight-bold text-center">
                      GRANADA THEATRE
                    </div>
                  </div>
                </div>
                <Image
                  fluid={data.granada.childImageSharp.fluid}
                  alt="Drawing Gallery"
                  classNameName="img-fluid"
                />
              </a>
            </div>
            <div className="col-lg-4 col-md-6 pb-5 mb-3 px-4">
              <a className="circle-item" href="./southern-plains-museum">
                <div className="caption">
                  <div className="caption-content mt-auto mx-5 mb-5">
                    <div className="caption-heading h2 font-weight-bold text-center">
                      SOUTHERN PLAINS MUSEUM AND CULTURAL CENTER
                    </div>
                  </div>
                </div>
                <Image
                  fluid={data.southern.childImageSharp.fluid}
                  className="img-fluid"
                  alt="SOUTHERN PLAINS MUSEUM"
                />
              </a>
            </div>
            <div className="col-lg-4 col-md-6 pb-5 mb-3 px-4">
              <a className="circle-item" href="./lepetit-trianon">
                <div className="caption">
                  <div className="caption-content mt-auto mx-auto mb-5">
                    <div className="caption-heading h2 font-weight-bold text-center">
                      LE PETIT TRIANON
                    </div>
                  </div>
                </div>
                <Image
                  fluid={data.lepetit.childImageSharp.fluid}
                  className="img-fluid"
                  alt="LE PETIT TRIANON EXHIBITION"
                />
              </a>
            </div>
            <div className="col-lg-4 col-md-6 pb-5 mb-3 px-4">
              <a className="circle-item" href="./graffiti-city-park">
                <div className="caption">
                  <div className="caption-content mt-auto mx-auto mb-5">
                    <div className="caption-heading h2 font-weight-bold text-center">
                      GRAFFITI CITY PARK
                    </div>
                  </div>
                </div>
                <Image
                  fluid={data.graffiti.childImageSharp.fluid}
                  className="img-fluid"
                  alt="GRAFFITI CITY PARK"
                />
              </a>
            </div>
            <div className="col-lg-4 col-md-6 pb-5 mb-3 px-4">
              <a className="circle-item" href="./artforjustice/">
                <div className="caption">
                  <div className="caption-content mt-auto mx-auto mb-5">
                    <div className="caption-heading h2 font-weight-bold text-center">
                      #ARTFORJUSTICE
                    </div>
                  </div>
                </div>
                <Image
                  fluid={data.art.childImageSharp.fluid}
                  className="img-fluid"
                  alt="#ARTFORJUSTICE"
                />
              </a>
            </div>
            <div className="col-lg-4 col-md-6 pb-5 mb-3 px-4">
              <a className="circle-item" href="./drawing-gallery/">
                <div className="caption">
                  <div className="caption-content mt-auto mx-auto mb-5">
                    <div className="caption-heading h2 font-weight-bold text-center">
                      DRAWING GALLERY
                    </div>
                  </div>
                </div>
                <Image
                  fluid={data.drawing.childImageSharp.fluid}
                  className="img-fluid"
                  alt="drawing gallery"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer classNameNameNameName="contact-footer" />
    </div>
  )
}
export const query = graphql`
  {
    drawing: file(
      relativePath: { eq: "archvilla/circle-drawing-gallery.png" }
    ) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    art: file(relativePath: { eq: "archvilla/circle-art-for-justice.png" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    granada: file(relativePath: { eq: "archvilla/circle-granada.png" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    graffiti: file(relativePath: { eq: "archvilla/circle-graffitti.png" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    lepetit: file(relativePath: { eq: "archvilla/circle-lepetit.png" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    southern: file(
      relativePath: { eq: "archvilla/circle-southern-plains.png" }
    ) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    archvilla: file(relativePath: { eq: "archvilla/circle-archvilla.png" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default index

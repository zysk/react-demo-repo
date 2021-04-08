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
          <div className="row d-flex justify-content-start align-items-center">
            <div className="col-lg-4">
              <div class="content_img">
                <a className="item" href="./archvilla">
                  <Image
                    fluid={data.archvilla.childImageSharp.fluid}
                    alt="Archvilla"
                    className="img-fluid image m-5"
                  />
                </a>
                <div class="middle">
                  <div class="text text-uppercase font-weight-bold">
                    ARCHVILLA
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2"></div>
            <div className="col-lg-4">
              <div class="content_img">
                <a className="item" href="./granada-theatre">
                  <Image
                    fluid={data.granada.childImageSharp.fluid}
                    alt="Granada Theatre"
                    className="img-fluid image m-5"
                  />
                </a>
                <div class="middle">
                  <div class="text text-uppercase font-weight-bold">
                    GRANADA THEATRE
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center align-items-center">
            {/* <div className="col-2"></div> */}
            <div className="col-lg-5">
              <div class="content_img">
                <a className="item" href="./graffiti-city-park">
                  <Image
                    fluid={data.graffiti.childImageSharp.fluid}
                    alt="GRAFFITI CITY PARK"
                    className="img-fluid image"
                  />
                </a>
                <div class="middle-1">
                  <div class="text text-uppercase font-weight-bold pl-5">
                    GRAFFITI CITY PARK
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-2"></div> */}
            <div className="col-lg-3">
              <div class="content_img">
                <a className="item" href="./lepetit-trianon">
                  <Image
                    fluid={data.lepetit.childImageSharp.fluid}
                    alt="Le Petit Trianon"
                    className="img-fluid image m-5"
                  />
                </a>
                <div class="middle">
                  <div class="text text-uppercase font-weight-bold w-100">
                    Le Petit Trianon
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-1"></div>
            <div className="col-lg-5">
              <div class="content_img">
                <a className="item" href="./southern-plains-museum">
                  <Image
                    fluid={data.southern.childImageSharp.fluid}
                    alt="Southern Plains Museum and Cultural Center"
                    className="img-fluid image m-4"
                  />
                </a>
                <div class="middle-2">
                  <div class="text text-uppercase font-weight-bold w-100">
                    Southern Plains Museum and Cultural Center
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-between align-items-center pb-5">
            {/* <div className="col-3"></div> */}
            <div className="col-lg-4">
              <div class="content_img">
                <a className="item" href="./artForJustice">
                  <Image
                    fluid={data.art.childImageSharp.fluid}
                    alt="ArtForJustice"
                    className="img-fluid image m-4"
                  />
                </a>
                <div class="middle">
                  <div class="text text-uppercase font-weight-bold">
                    #ARTFORJUSTICE
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mt-5 pt-5 last-col">
              <div class="content_img">
                <a className="item" href="./drawing">
                  <Image
                    fluid={data.drawing.childImageSharp.fluid}
                    alt="Drawing Gallery"
                    className="img-fluid image m-4"
                  />
                </a>
                <div class="middle-2">
                  <div class="text text-uppercase font-weight-bold pr-4">
                    DRAWING GALLERY
                  </div>
                </div>
              </div>
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

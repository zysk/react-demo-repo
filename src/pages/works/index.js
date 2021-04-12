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
      <section className="circle-section" id="portfolio">
        <div className="container pb-5 mb-5 mb-md-0">
          <div className="content-section-heading text-center">
            <h3 className="my-5 mb-lg-0 title">OUR WORKS</h3>
          </div>
          <div className="row d-flex justify-content-md-start justify-content-center align-items-center pb-md-3">
            <div className="col-md-1"></div>
            <div className="col-md-3">
              <div className="content_img">
                <a className="item" href="/works/archvilla">
                  <Image
                    fluid={data.archvilla.childImageSharp.fluid}
                    alt="Archvilla"
                    className="img-fluid image"
                  />
                </a>
                <div className="middle">
                  <div className="text text-uppercase font-weight-bold pt-4 pt-md-0 pl-lg-5">
                    ARCHVILLA
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-3  pt-5 pt-lg-0  first-col">
              <div className="content_img">
                <a className="item" href="/works/southern-plains-museum">
                  <Image
                    fluid={data.southern.childImageSharp.fluid}
                    alt="Southern Plains Museum and Cultural Center"
                    className="img-fluid image m-md-4"
                  />
                </a>
                <div className="middle">
                  <div className="text text-uppercase font-weight-bold w-100 pt-4 pt-md-0">
                    Southern Plains Museum and Cultural Center
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center align-items-center pb-md-3">
            {/* <div className="col-2"></div> */}
            <div className="col-md-4 mt-5 pt-5 mt-md-0 pt-md-0">
              <div className="content_img">
                <a className="item" href="/works/lepetit-trianon">
                  <Image
                    fluid={data.lepetit.childImageSharp.fluid}
                    alt="Le Petit Trianon"
                    className="img-fluid image m-md-5"
                  />
                </a>
                <div className="middle-1">
                  <div className="text text-uppercase font-weight-bold  pt-4 pt-md-0">
                    Le Petit Trianon
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3 mt-5 pt-5">
              <div className="content_img">
                <a className="item" href="/works/graffiti-city-park">
                  <Image
                    fluid={data.graffiti.childImageSharp.fluid}
                    alt="GRAFFITI CITY PARK"
                    className="img-fluid image"
                  />
                </a>
                <div className="middle">
                  <div className="text text-uppercase font-weight-bold pl-xl-5 pt-4 pt-md-0">
                    GRAFFITI CITY PARK
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-between align-items-center py-md-0">
            {/* <div className="col-md-1"></div> */}
            <div className="col-md-3  pt-5  pt-md-0 first-col">
              <div className="content_img">
                <a className="item" href="/works/artForJustice">
                  <Image
                    fluid={data.art.childImageSharp.fluid}
                    alt="ArtForJustice"
                    className="img-fluid image m-md-4"
                  />
                </a>
                <div className="middle">
                  <div className="text text-uppercase font-weight-bold pt-4 pt-md-0 pl-lg-5 ml-lg-3">
                    #ARTFORJUSTICE
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5 pt-5 mt-md-0 pt-md-0">
              <div className="content_img">
                <a className="item" href="/works/granada-theatre">
                  <Image
                    fluid={data.granada.childImageSharp.fluid}
                    alt="Granada Theatre"
                    className="img-fluid image m-md-5"
                  />
                </a>
                <div className="middle">
                  <div className="text text-uppercase font-weight-bold pt-4 pt-md-0">
                    GRANADA THEATRE
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>

          <div className="row d-flex justify-content-xl-between justify-content-md-between align-items-start last-row">
            <div className="col-6"></div>
            {/* <div className="col-md-3 mt-5 pt-5 mt-md-0 pt-md-0">
              <div className="content_img">
                <a className="item" href="/works/artForJustice">
                  <Image
                    fluid={data.art.childImageSharp.fluid}
                    alt="ArtForJustice"
                    className="img-fluid image m-md-4"
                  />
                </a>
                <div className="middle">
                  <div className="text text-uppercase font-weight-bold pt-4 pt-md-0">
                    #ARTFORJUSTICE
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-md-3 mt-5 pt-5 last-col ">
              <div className="content_img">
                <a className="item" href="/works/drawing">
                  <Image
                    fluid={data.drawing.childImageSharp.fluid}
                    alt="Drawing Gallery"
                    className="img-fluid image m-lg-4"
                  />
                </a>
                <div className="middle-2">
                  <div className="text text-uppercase font-weight-bold pr-md-4 pt-3">
                    DRAWING GALLERY
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
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
